const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");
const app = express();
const PORT = /*process.env.PORT ||*/ 3000;
const Handlebars =  require("handlebars");
const session = require("express-session");
const sequelizeStore = require("connect-session-sequelize")(session.Store);

app.use(session({
    secret: 'notssss',
    store: new sequelizeStore({
      db: db.sequelize,
      proxy: true
    }),
    resave: false,
    proxy: true,
    saveUninitialized : true
  }))

app.use(express.urlencoded({
extended:false
}));
app.use(express());
app.use(express.static("public"));

require("./routes/html_Routes/htmlM")(app);
require("./routes/api_Routes/apiM")(app);

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main",
        layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
    })
)

Handlebars.registerHelper("spChar", function (url){
    let newUrl = encodeURI(url);
    console.log(newUrl)
    return newUrl;

})
app.set("view engine","handlebars");


var syncOptions = {
    force: false,
    // logging: console.log
  };

db.sequelize.sync(syncOptions).then(function (){
    app.listen(PORT , function (){
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:3000/NoteTaker in your browser.", PORT, PORT

        )
    })
})

module.exports = app;