import { json } from "sequelize/types";

var API = {
    createNote: function () {
      return $.ajax({
        url: "/noteTaker/create/note",
        type: "POST",
        success: function(){
          location.reload()
          alert('Note Been Saved');
         }
      })
    },
    getNotes: function () {
        return $.ajax({
            url : "noteTaker/get-all-notes",
            type : "GET",
        })
    },
   editNote : function (){
        return $.ajax({
            url : "noteTaker/update/note/reference:",
            type : "UPDATE",
            success : function (){
                
            }
        })
    }
}


