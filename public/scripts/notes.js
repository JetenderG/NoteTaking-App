



var API = {
    createNote: function () {
        return $.ajax({
            url: "/create-note",
            type: "POST",
            success: function () {
                location.reload()
                alert('Note Been Saved');
            },
            error: function () {
                console.log('Submission Error ')
            }
        })
    },
    getNotes: function () {
        return $.ajax({
            url: "/gather-notes",
            type: "GET",
        })
    },
    editNote: function () {
        return $.ajax({
            url: "/update/note/:id",
            type: "UPDATE",

        })
    },
    loggout: function () {
        return $.ajax({
            url: "/destroy/session",
            type: "POST",
            success : ()=>{
                console.log('Destroyed')
            }
        })

    }
}
    // accessApi = () =>{   
    //     console.log(window.location.href)
    //     if (window.location.href == "http://localhost:3000/noteTaker/your-notes") {
    //         API.getNotes()
    // }}

    
    // accessApi();

$(function () {
    console.log(window.location.href)

$(".submitNote").on("click", ()=>{
})

$(".note").on('click', (event) =>{

    console.log(event.target)




})
    let overlayAll = () => {
        console.log('hi');
        const overlay = $('.overlay-null');
        const overlay_h = $('.header-div');
        const overlay_n = $('.noteBoard');
       // const overlay_f = $('.footer');
        overlay.addClass('overlay-on');
        overlay_h.addClass('overlay-header');
        overlay_n.addClass('overlay-noteBoard');
       // overlay_f.addClass('overlay-footer');
        console.log("OverLay ON")
        let overlayClass =$("#noteFrom")

        overlayClass.addClass('new-note-form');
        overlayClass.removeClass('new-note-formn-none');
    }

    let overlayOff = () =>{
        const overlay = $('.overlay-null');
        const overlay_h = $('.header-div');
        const overlay_n = $('.noteBoard');
        //const overlay_f = $('.footer');
        overlay.removeClass('overlay-on');
        overlay_h.removeClass('overlay-header');
        overlay_n.removeClass('overlay-noteBoard');
      //  overlay_f.removeClass('overlay-footer');
        let overlayClass =$("#noteFrom")

        overlayClass.addClass('new-note-form-none')
        overlayClass.removeClass('new-note-form');

    }


    $(".input-note").on('click', overlayAll)


    $('.close-note').on('click',overlayOff)



    $(".logOut-btn").on('click', API.loggout);

});

