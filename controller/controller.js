var db = require("../models")
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
var bcrypt = require("bcrypt");
const axiox = require("axios");
const handlebars = require('handlebars');
module.exports = {
    getAllNote: (req, res, next) => {
        console.log("honninon")
     //   let username = req.session.username;
       // let userId = req.session.userId;
        let user= 1;
     //   console.log("This is the session of the req start  :" + req.session.username)
        if (req.session.username == null || req.session.username == undefined) {
            res.redirect('/NoteTaker');
            console.log("great")
        } else {
            let id = req.session.userId;
            //console.log("The id " + id);
                //this function keeps altering session.username
            db.Notes.findAll({
                where: {
                    NotesAcc: id
                },
                include: [{ model: db.Accounts, as: "notesUses" }]
            })
                .then( data => {
                    console.log("Thos so the data pf the accpimt mptes : " + data)
                   // console.log("This must be checked")
                 //   console.log(data)
                    if (data == null || data == undefined){
                       console.log("Note Available")
                    //    res.session.data = data;
                    }else{
                    // console.log(req.session)
                    async  function addData (){
                    req.session.allofNotes = [];
                    req.session.allofNotes = data;
                    req.session.checifExistenceAlter = true;
                    console.log(req.session.allofNotes[0]);
                    }              
                    addData().then(data=>{
                    console.log("Content Passed On")
                    next();
                    })
                    
                       // reRenderPerN({});
                    }
                })
                .catch(err => {
                    throw err;
                })
        };
    },
    getSpecficOne : (req,res)=>{

        db.Notes.findAll({
            where:{title:title}
        }).then(response =>{

            if(response == null || response == undefined ||response == ''){
                return res.send()
            };



        });






    },
    createNote: (req, res) => {
        console.log("Title: " + req.body.title + "  Text:  " + req.body.note)
     //   console.log(req.body)
        //console.log("This is the seession where we create notes:  " +
       // req.session.username)
        db.Accounts.findAll({
            where: { username: req.session.username }
        }).then(data => {
            //console.log(data)
            let userId = data[0].dataValues.id
            let note = {
                title: req.body.title,
                note: req.body.note,
                NotesAcc: userId
            }
            if (note.title == null || note.note == null) {
                return res.send('Please add a title and or text')
            } else {
                db.Notes.create(note)
                    .then(function (data) {
                        console.log(`Created Note${data}`)
                        res.redirect('NoteTaker/your-notes')
                    });
            };

        });
    },
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
        });
    },
    CreateAccount: (req, res) => {
        let saltRounds = 10;
        db.Accounts.findAll({
            where: {
                username: req.body.username,
                password: req.body.email
            }
        }).then(function (data) {
            console.log("Hitting the creaion point")
            if (data.length > 1) {
                res.send("The Account is already taken")
            } else if (data.length < 1) {
                console.log("Creating account point")
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
                        });
                    });
                });
            };
        });
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
                      //  console.log("This is an object of account:  " + results.id)
                        // console.log(JSON.stringify(results))
                        //console.log(results.dataValues)
                        if (err) throw err;
                        console.log(username)
                        if (check == true) {
                            request.session.loggedin = true;
                            request.session.username = username;
                            request.session.userId = results.id
                            // request.session.id = id;
                            respond.redirect('/NoteTaker');
                            console.log(request.session)
                        } else {
                            respond.json("Incorrect Passwprd ")
                        };
                    });
                };
            });
        };
    },
    DestroySession: (req, res) => {
        req.session.destroy(function (err) {
            if (err) throw err;
            console.log("This sesssion has been destroyed");
            res.redirect("/NoteTaker");
        });
    },
    validateData : (req, res, next)=>{
        console.log("The Validate segnment")
        const username = req.session.username;

        if (req.session.username == null){
            return  res.redirect("/NoteTaker")
        }

        //  console.log(`${username} ${password}`)
       
            db.Accounts.findOne({
                where: {
                    username: username
                }
            }).then(function (results) {
               // console.log(results)
                if (!results) {
                    console.log("redirect")
                    res.redirect("/NoteTaker ")
                } else {
                    // console.log(results);
                            next();
                };
            });
        

    }
};