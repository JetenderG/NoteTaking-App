const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;


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
        defaultLayout: "main"
    })
)

app.set("view engine","handlebars");

var syncOptions = {
    force:false
};


db.sequelize.sync(syncOptions).then(function (){
    app.listen(PORT , function (){
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/NoteTaker in your browser.", PORT, PORT

        )
    })
})

module.exports = app;