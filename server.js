const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3306;


app.use(express.urlencoded({
extended:false
}));
app.use(express());
app.use(express.static("public"));


app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
)

app.set("view engine","handlebars");

var syncOptions = {
    force:false
};

if (process.env.NODE.ENV === "test"){
    syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function (){
    app.listen(PORT , function (){
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/NoteTaker in your browser.", PORT, PORT

        )
    })
})

module.exports = app;