var db = require("../../models")

module.exports  = apps =>  {

apps.get("/" && "/noteTaker" ,  function (req, res){
    ///Ajax call must me made here to gather the information for the session, goes with everyone 
  let username = req.session.username;
 console.log("HEELL  " +req.session.loggedin)
  if (username !== "") {
    res.render("index", {
  username
   });
console.log(req.session)
  } else if (username){
    res.render("index")
    username
    };
    

  })

apps.get("/NoteTaker/login", function (req,res){
    res.render("login")
    })

apps.get("/NoteTaker/your-notes", function (req,res){
    let username = req.session.username;
    if (username === "") {
      res.send("Please Login in Order to Create Notes")

    } else  {
      console.log(username)
      res.render("notes", {
        username
      })
    }
    })

    apps.get("*", function (req, res) {
        res.render("404");
      });

};