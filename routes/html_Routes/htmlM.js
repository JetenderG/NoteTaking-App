var db = require("../../models")
const controller = require('../../controller/controller')
const Handlebars = require('handlebars');
module.exports = app => {



  app.get("/NoteTaker", function (req, res) {
    ///Ajax call must me made here to gather the information for the session, goes with everyone 
    let username = req.session.username;
    //console.log("HEELL  " +req.session.id)
    if (username !== "") {
      res.render("index", {
        username
      });
      //console.log(req.session)
    } else if (username) {
      res.render("index")
      username
    };
  })
  app.get("/NoteTaker/login", function (req, res) {
    console.log("This is the session from login Route : "+req.session)
    res.render("login")
  })

  app.use("/NoteTaker/your-notes", controller.validateData)

  app.get("/NoteTaker/your-notes", controller.getAllNote, function (req, res) {
    let username = req.session.username;
    let userId = req.session.userId;
    // console.log(userId)
    //console.log(username);
    // if ( username === "") {
    //   res.send("Please Login in Order to Create Notes")
    // } else  {
    // console.log(username)
    console.log("This is session from the htmlRoute : " + req.session)
    console.log(req.session.data)
  let data = {
        username: username,
        userId: userId,
        notes:  req.session.allofNotes
      }
      const template = Handlebars.compile("{{perNote}}");
      template({});    
      res.render("notes",data)
  })
  //  })
};