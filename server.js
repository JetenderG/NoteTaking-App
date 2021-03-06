const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");
const app = express();
const PORT = /*process.env.PORT ||*/ 3000;
const Handlebars = require("handlebars");
const session = require("express-session");
const sequelizeStore = require("connect-session-sequelize")(session.Store);
const controller = require("./controller/controller");
app.use(session({
    secret: 'notssss',
    store: new sequelizeStore({
        db: db.sequelize,
        genid: function(req) {
            return genuuid() // use UUIDs for session IDs
          },
        proxy: true,
        cookie: { secure: true }

    }),
    resave: false,
    proxy: true,
    saveUninitialized: false
}))
app.use(express.urlencoded({
    extended: false
}));
app.use(express());
app.use(express.static("public"));
require("./routes/html_Routes/htmlM")(app);
require("./routes/api_Routes/apiM")(app);
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main",
    })
)
Handlebars.registerHelper("getAll", function () {
    return controller.getAllNote();
})
app.set("view engine", "handlebars");
var syncOptions = {
    force: false,
    // logging: console.log
};
db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:3000/NoteTaker in your browser.", PORT, PORT
        )
    })
})
module.exports = app;