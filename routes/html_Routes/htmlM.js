var db = require("../../models")

module.exports  = apps =>  {

apps.get("/NoteTaker" ,  function (req, res){
    ///Ajax call must me made here to gather the information for the session, goes with everyone 
    res.render("index")
})

apps.get("/NoteTaker/login", function (req,res){
    res.render("login")
})

apps.get("/NoteTaker/notes", function (req,res){
    res.render("notes")
})


};