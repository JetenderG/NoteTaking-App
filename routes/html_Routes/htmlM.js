var db = require("../../models")

module.exports  = app =>  {

app.get("/NoteTaker" ,  function (req, res){
    ///Ajax call must me made here to gather the information for the session, goes with everyone 
  let username = req.session.username;
 //console.log("HEELL  " +req.session.id)
  if (username !== "") {
    res.render("index", {
  username
   });
//console.log(req.session)
  } else if (username){
    res.render("index")
    username
    };
    

  })

app.get("/NoteTaker/login", function (req,res){
    res.render("login",)
    })

app.get("/NoteTaker/your-notes", function (req,res){
    let username = req.session.username;
    let userId = req.session.userId;

    console.log(userId)
    // if ( username === "") {
    //   res.send("Please Login in Order to Create Notes")

    // } else  {
     // console.log(username)
      res.render("notes", {
        data:{
         username: username,
         userId: userId        }
        
      })
    })
  //  })

    

};