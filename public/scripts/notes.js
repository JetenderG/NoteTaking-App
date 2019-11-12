

var API = {
    createNote: function () {
      return $.ajax({
        url: "/create-note",
        type: "POST",
        success: function(){
          location.reload()
          alert('Note Been Saved');
         }
      })
    },
    getNotes: function () {
        return $.ajax({
            url : "/get-all-notes",
            type : "GET",
        })
    },
   editNote : function (){
        return $.ajax({
            url : "/update/note/:id",
            type : "UPDATE",
            success : function (){
                
            }
        })
    },

}

$(function(){
    console.log("ho"
    )
    const overlayAll = () =>{
        console.log('hi');
        const overlay = $('.overlay-null');
        const overlay_h = $('.header-div');
        const overlay_n = $('.noteBoard');
        const overlay_f = $('.footer');
        overlay.addClass('overlay-on');
        overlay_h.addClass('overlay-header');
        overlay_n.addClass('overlay-noteBoard');
        overlay_f.addClass('overlay-footer');
    };

$(".input-note").on('click', overlayAll)


$('.close-note').on('click', function (){
    const overlaynull = $('.overlay-null');
    overlaynull.removeClass('overlay-on');
    overlay_h.removeClass('overlay-header');
    overlay_n.removeClass('overlay-noteBoard');
    overlay_f.removeClass('overlay-footer');
})


console.log(request)
$(document).on("click", function (){
    console.log(session)
})
})