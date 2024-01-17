
$(document).on('click', '#password_icon', function() {
    // $(this).toggleClass("fa-eye fa-eye-slash");
    console.log("Hello");
    var input = $("#floatingInputPwd");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  
});