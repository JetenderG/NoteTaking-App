var db = require("../../models")
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
var bcrypt = require("bcrypt");
module.exports  = apps =>  {
apps.get("/account_owner/notes", function (req, res) {
    let username = req.params.username;
    if (username = null){
        res.send("Login to Writes your notes");
    }else{
        next();
    };
});
apps.get("/account_owner/notes", function (req ,res){
    let username = req.params.username;
    db.notes.findAll({
        where: username = username
    }).then(function (data){
        res.json(data);
    });
});
apps.get("/account_owner/notes-titles", function (req, res){
    let username = req.params.username;
    db.notes.findAll({
        where: username = username
    }).then(function (data){
        res.json(data.title);
    });
})

apps.post("/account_owner/newNote", function (req,res){
    console.log("Title: " +req.body.title + "  Text:  " + req.body.text)
       let note = {
        title : req.body.title,
            note : req.body.note           
       }

       db.notes.create(note,{where: username = req.session.username}).then( function (data){
           console.log("Note Created")
       })
       
})  
apps.put("/account_owner/updateNote", function (req,res){
    console.log("Title: " +req.body.title + "  Text:  " + req.body.text)
       let note = {
        title : req.body.title,
            note : req.body.note           
       }

       db.notes.create(note,{where: username = req.session.username}).then( function (data){
           console.log("Note Created")
       })
       
})  
apps.post("/account_owner/newNote", function (req,res){
    let username = req.params.username;
})




////Login and Registeration
apps.post("/account_create", function (req , res){
    let saltRounds = 10;
    db.accounts.findAll({ where:{
        username : req.body.username,
        password : req.body.email
    }}).then(function (data) {
        if (data.length > 1){
            res.send("The Account is already taken")
        }else if (data.length < 1){
            bcrypt.genSalt(saltRounds, function (err, salt){
                if (err) throw err
                bcrypt.hash(req.body.password, salt, function (err, hash){
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
apps.post("/authorize", function (request,respond){
    var username = request.body.username;
    var password = request.body.password;
    if (username && password){
        db.accounts.findAll({
            where :{
                username: username
            }
        }).then(function (results){
            if (!results){
                request.send("Account does not exist")
            } else {
                console.log(results);
                bcrypt.compare(password, results[0].dataValues.password, function (err, results){
                    console.log(JSON.stringify(results))
                    if (err) throw err;
                    if (results == true){
                        request.session.loggedin = true;
                        request.session.username = username;
                   respond.redirect('/NoteTaker');
                        console.log(request.session)
                    }else {
                        respond.send("Incorrect Passwprd ")
                    }
                })
                location.reload();

            }
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