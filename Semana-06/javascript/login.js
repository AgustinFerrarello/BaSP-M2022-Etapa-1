var email = document.getElementById('email-log');
var pass = document.getElementById('pass-log');
var emError = document.getElementById('em-hide');
var form = document.getElementById('form-id');
var passError = document.getElementById('pass-hide');

var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

var emailErrorMsg;
var passErrorMsg;

function emailValidator() {
  var emailOk = emailRegex.test(email.value);
  if (!emailOk) {
    emailErrorMsg = "The email isn't valid.";
    emError.innerHTML = emailErrorMsg;
    emError.classList.remove('txt-hide');
  } else{
    emailErrorMsg = "";
  }
}
function emailReset() {
  emError.classList.add('txt-hide');
  emError.innerHTML = "";
}

function passValidator() {
  var passOk = passRegex.test(pass.value);
  if (!passOk) {
    passErrorMsg = "Password isn't valid.";
    passError.innerHTML = passErrorMsg;
    passError.classList.remove('txt-hide')
  } else{
    passErrorMsg = "";
  }
}
function passReset() {
  passError.classList.add('txt-hide');
  passError.innerHTML = "";
}

function formValidation(event) {
  event.preventDefault();
  emailValidator();
  passValidator();

  if(emailErrorMsg || passErrorMsg){
    var errorMsg = emailErrorMsg + "\n" + passErrorMsg;
    alert(errorMsg);
  } else {
    var successMsg = 'Email: ' + email.value + "\n" + 'Password: ' + pass.value;
    alert(successMsg);
  }
}

form.addEventListener('submit', formValidation);

email.addEventListener('blur', emailValidator);
pass.addEventListener('blur', passValidator);

email.addEventListener('focus', emailReset);
pass.addEventListener('focus', passReset);