var db = require("../../models")
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
var bcrypt = require("bcrypt");
const controller = require("../../controller/controller")
module.exports  = apps =>  {
apps.get("/account_owner/notes",controller.getAllNote);
apps.post("/account_owner/newNote", controller.createNote)  
apps.put("/account_owner/updateNote", controller.UpdateNote)  
apps.post("/account_owner/newNote", controller.createNote)
////Login and Registeration
apps.post("/account_create",controller.createNote)
apps.post("/authorize", controller.Authorize)
apps.delete("/destroy/session",controller.DestroySession)


}