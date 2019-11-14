var db = require("../models")
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
var bcrypt = require("bcrypt");
module.exports = {
    getAllNote: (req, res) => {
        console.log("honninon")
        if (req.params.username = null) {
            res.send("Login to Writes your notes");
            console.log("great")
        } else {
            let id = req.session.userId;
            console.log("The id " + id);
            db.Notes.findAll()
            .then(function (data) {
                //res.json(data);
                console.log("This must be checked")
                console.log(data.getnoteID)
                res.json(data)
            })
            .catch(err=>{
                throw err;
            })
        };
    },
    createNote: (req, res) => {
        console.log("Title: " + req.body.title + "  Text:  " + req.body.note)
        console.log(req.body)
        db.Accounts.findAll({
            where:{ username : req.session.username}
        }).then(data=>{
            let userId = data[0].dataValues.id
            let note = {
            title: req.body.title,
            note: req.body.note,
            noteID: userId
        }
if(note.title ==null || note.note == null){
    return res.send('Please add a title and or text')
}else{
     db.Notes.create(note)
     .then(function (data) {
            console.log("Note Created")
        })   
        }
        
    })
    } ,
    UpdateNote: (req, res) => {
        console.log("Title: " + req.body.title + "  Text:  " + req.body.text)
        let note = {
            title: req.body.title,
            note: req.body.note
        }
        db.Notes.create(note, {
            where: username = req.session.username
        }).then(function (data) {
            console.log("Note Created")
        })
    },
    CreateAccount: (req, res) => {
        let saltRounds = 10;
        db.Accounts.findAll({
            where: {
                username: req.body.username,
                password: req.body.email
            }
        }).then(function (data) {
            if (data.length > 1) {
                res.send("The Account is already taken")
            } else if (data.length < 1) {
                bcrypt.genSalt(saltRounds, function (err, salt) {
                    if (err) throw err
                    bcrypt.hash(req.body.password, salt, function (err, hash) {
                        if (err) throw err
                        let newaccount = {
                            username: req.body.username,
                            password: hash,
                            email: req.body.email
                        }
                        db.Accounts.create(newaccount).then(function (data) {
                            res.redirect("/NoteTaker/login")
                        })
                    })
                })
            }
        })
    },
    ////Login and Registeration
    Authorize: (request, respond) => {
     //   console.log('hekko')
        var username = request.body.username;
        var password = request.body.password;
      //  console.log(`${username} ${password}`)
        if (username && password) {
            db.Accounts.findOne({
                where: {
                    username: username
                }
            }).then(function (results) {
               // console.log(results)
                if (!results) {
                    console.log("hi")
                    respond.json("Account does not exist")
                } else {
                   // console.log(results);
                    bcrypt.compare(password, results.dataValues.password, function (err, check) {
                        console.log("This is an object of account:  " +results.id)
                       // console.log(JSON.stringify(results))
                       //console.log(results.dataValues)
                        if (err) throw err;
                        if (check == true) {
                            request.session.loggedin = true;
                            request.session.username = username;
                            request.session.userId= results.id
                           // request.session.id = id;
                            respond.redirect('/NoteTaker');
                            console.log(request.session)
                        } else {
                            respond.json("Incorrect Passwprd ")
                        }
                    })
                }
            })
        }
    },
    DestroySession: (req, res) => {
        req.session.destroy(function (err) {
            if (err) throw err;
            res.location('/Notetaker')
        })
    }
}