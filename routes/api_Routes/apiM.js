var db = require("../../models")
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
var bycrpt = require("bcrypt");

module.exports  = apps =>  {


apps.get("/account_owner/notes", function (req, res) {
    let username = req.params.username;
    if (username = null){
        res.send("Login to Writes your notes");
    };
});

apps.get("/account_owner/notes", function (req ,res){
    let username = req.params.username;
    db.notes.findAll({
        where: user = username
    }).then(function (data){
        res.json(data);
    });
});

apps.post("/account_owner/newNote", function (req,res){
    let username = req.params.username;

})
apps.post("/account_owner/newNote", function (req,res){
    let username = req.params.username;

})

apps.post("/account_create", function (req , res){
    let saltRounds = 10;
    db.accounts.findAll({ where:{
        username : req.body.username,
        password : req.body.password
    }}).then(function (data) {
        if (data.length > 1){
            res.send("The Account is already taken")
        }else if (data.length < 1){
            bycrpt.genSalt(saltRounds, function (err, salt){
                if (err) throw err

                bycrpt.hash(req.body.password, salt, function (err, hash){
                    if (err) throw err 
                    let newaccount = {
                        username : req.body.username,
                        password : hash,
                        email    : req.body.email
                    }
                    db.accounts.create(newaccount).then(function (data){
                        res.redirect("/NoteTaker/login")
                    })
                })
            })

        }
    })
})

apps.post("/authorize", function (req,res){
    let username = req.body.username;
    let password = req.body.password;
    if (username && password){
        db.accounts.findAll({
            where :{
                username: username
            }
        }).then(function (results){
            if (!results){
                res.send("Account does not exist")
            } else {
                bycrpt.compare(password, results[0].dataValues.password, function (err, results){
                    console.log(JSON.stringify(results))
                    if (err) throw err;
                    if (results == true){
                        req.session.loggedin = true;
                        req.session.username = username;
                        res.redirect('/NoteTaker');
                    }else {
                        res.send("Incorrect Passwprd ")
                    }
                })
            }
            res.redirect("/NoteTaker")
        })

    }
})

apps.delete("/destroy/session", function (req, res){
        req.session.destroy( function (err){
            if (err) throw err;
            res.json({sucess:true})
        })
})
}