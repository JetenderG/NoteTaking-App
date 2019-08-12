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

apps.post("/account_login", function (req , res){
        
})


}