var API = {
    loggout: function () {
      return $.ajax({
        url: "/destroy/session",
        type: "DELETE",
        success: function(){
          location.reload()
          alert('You have been logged out');
         }
      })
    }
}


$('.logOut-btn').on('click',()=>{
console.log("hi")

})