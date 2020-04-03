//validate form
$("document").ready(function() {
  var loginForm = $(".needs-validation");
  loginForm.on("submit", function(){
    validate(event, loginForm);
  });
});

function validate(event, loginForm){
  loginForm.each(function(){
    if (this.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    $(this).addClass('was-validated');
  })

  // check if all imput field valid
  loginForm.each(function(){
    var formValid = true;
    if($(this).is(':invalid')){
      formValid = false;
    }
    if(formValid){
      loginForm.attr('action', '/users/' + $(inputUsername).val());
      console.log(loginForm.attr('action'));
    }
  })
}
//AJAX get call to retreive data (not working CORS policy)
// function getData(){
//   console.log("hahah");
//   var userName = $("#inputUsername");
//   $.ajax({
//     url: "localhost:8080/users/5d80878f972c0653c2fd1679",
//     type: "GET",
//     dataType: "json",
//     success: successFn,
//     error: function(){
//       console.log("you fucked up");
//     }
//   });
// }
//
// function successFn(result){
//   console.log("get successfully");
//   console.log(result);
// }
