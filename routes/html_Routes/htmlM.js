var db = require("../../models")

module.exports  = apps =>  {

apps.get("/NoteTaker" ,  function (req, res){

    res.render("index")
})

apps.get("/NoteTaker/login", function (req,res){
    res.render("login")
})

apps.get("/NoteTaker/notes", function (req,res){
    res.render("notes")
})


};