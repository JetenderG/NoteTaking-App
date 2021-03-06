var db = require("../../models")
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
var bcrypt = require("bcrypt");
const controller = require("../../controller/controller")
module.exports = app => {
    app.get("/gather-notes", controller.getAllNote);
    app.get("/gather-notes", controller.getSpecficOne);

    app.post("/create-note", controller.createNote)
    app.put("/update/note/:id", controller.UpdateNote)
    ////Login and Registeration
    app.post("/account_create", controller.CreateAccount)
    app.post("/authorize", controller.Authorize)
    app.post("/destroy/session", controller.DestroySession)


}