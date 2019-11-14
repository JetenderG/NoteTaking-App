


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
            url : "/gather-notes",
            type : "GET",  
        })
    },
   editNote : function (){
        return $.ajax({
            url : "/update/note/:id",
            type : "UPDATE",
           
        })
    },
    loggout : function(){
        return $.ajax({
            url:"/destroy/session",
            type : "DELETE",
            success : function (){
                window.location.replace('/noteTaker')            }


        })

    }
}

$(function(){
 
    function all (){
        API.getNotes().then( function (data){
            console.log(data)
        })

     };

    all();
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



$(".logOut-btn").on('click', API.loggout)

})