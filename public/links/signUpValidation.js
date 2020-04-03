
//validate form
$("document").ready(function() {
  var registerForm = $(".needs-validation");
  registerForm.on("submit", function(){
    validate(event, registerForm);
  });
});

function validate(event, registerForm){
  var password = $("#inputPassword");
  var passwordConfirmed = $("#inputPasswordConfirm");
  registerForm.each(function(){
    if (this.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
    }
    $(this).addClass('was-validated');
  })
  if (password.val() != passwordConfirmed.val()) {
      document.getElementById('inputPasswordConfirm').setCustomValidity('Passwords must match.');
      event.preventDefault();
      event.stopPropagation();
  } else {
      document.getElementById('inputPasswordConfirm').setCustomValidity('');
  }
  //check if all imput field valid
  registerForm.each(function(){
    var formValid = true;
    if($(this).is(':invalid')){
      formValid = false;
    }
    if(formValid){
      getData(formValid, registerForm);
    }
  })
  // event.preventDefault();
  // event.stopPropagation();
}

function getData(formValid, registerForm){
  if(formValid){
    var user = new Object();
    user.firstName = $("#validationFirstName").val();
    user.lastName = $("#validationLastName").val();
    user.userName = $("#validationUsername").val();
    user.city = $("#validationCity").val();
    user.state = $("#validationState").val();
    user.zip = $("#validationZip").val();
    user.password = $("#inputPassword").val();
  }
  console.log(user);
}
