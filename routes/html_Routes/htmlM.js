var db = require("../../models")

module.exports  = apps =>  {

apps.get("/NoteTaker" ,  function (req, res){
    ///Ajax call must me made here to gather the information for the session, goes with everyone 
    let username = req.session.username;
    console.log(username)
    if (username === "") {
      res.render("index", {
          username
      });

    } else {
      res.render("index", {
        username
      });
    }

})

apps.get("/NoteTaker/login", function (req,res){
    let username = req.session.username;
    if (username === "") {
      res.render("login", {
        username
      });

    } else {
      res.render("login", {
        username
      })
    }
    })

apps.get("/NoteTaker/notes", function (req,res){
    let username = req.session.username;
    if (username === "") {
      res.render("notes", {
        username
      });

    } else {
      res.render("notes", {
        username
      })
    }
    })

    apps.get("*", function (req, res) {
        res.render("404");
      });

};