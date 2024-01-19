
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

function selected() {
  var v = document.getElementById("upload_patient_doc");
  if (v.files.length != 0) {
      debugger;
      document.getElementById("selected_file").innerText = v.files[0].name;
  }
}


