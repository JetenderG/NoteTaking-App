var db = require("../../models")
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
var bcrypt = require("bcrypt");
const controller = require("../../controller/controller")
module.exports = apps => {
    apps.get("/your-notes", controller.getAllNote);
    apps.post("/create-note", controller.createNote)
    apps.put("/update/note/:id", controller.UpdateNote)
    ////Login and Registeration
    apps.post("/account_create", controller.CreateAccount)
    apps.post("/authorize", controller.Authorize)
    apps.delete("/destroy/session", controller.DestroySession)


}