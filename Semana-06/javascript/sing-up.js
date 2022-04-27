
var fName = document.getElementById('name-id');
var fNError = document.getElementById('fNameError')
var lName = document.getElementById('ln-id');
var lNError = document.getElementById('lNameError')
var dni = document.getElementById('dni-id');
var bDate = document.getElementById('b-date');
var phone = document.getElementById('phone-id');
var phoneError =document.getElementById('phoneError');
var adress = document.getElementById('adress-id');
var adressError = document.getElementById('adressError');
var city = document.getElementById('city-id');
var postCode = document.getElementById('postal-id');
var email = document.getElementById('email-log');
var pass = document.getElementById('pass-log');
var passVer = document.getElementById('pass-ver');
var emError = document.getElementById('em-hide');
var form = document.getElementById('form-id');
var passError = document.getElementById('pass-hide');
var passVerError = document.getElementById('passVer-hide');

var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var nameRegex = /[a-zA-Z]{3,}/;
var numbersRegex = /[0-9]{7,}/;
var phoneRegex = /[0-9]{10,}/;
var adressRegex = /[a-zA-Z]+" "+ [0-9]{3,}/;

var emailErrorMsg;
var passErrorMsg;
var passVerErrorMsg;
var fNErrorMsg;
var lNErrorMsg;
var dniErrorMsg;
var phoneErrorMsg;
var adressErrorMsg;

function fNameCheck() {
  var nameOk = nameRegex.test(fName.value);
  if (!nameOk) {
    fNErrorMsg = "More than 3 letters.";
    fNError.innerHTML = fNErrorMsg;
    fNError.classList.remove('txt-hide');
  } else {
    console.log(nameOk);
  }
}
function fNameReset() {
  fNError.classList.add('txt-hide');
  fNError.innerHTML = "";
}
fName.addEventListener('blur', fNameCheck);  
fName.addEventListener('focus', fNameReset);

function lNameCheck() {
  var lNameOk = nameRegex.test(lName.value);
  if (!lNameOk) {
    lNErrorMsg = "More than 3 letters.";
    lNError.innerHTML = lNErrorMsg;
    lNError.classList.remove('txt-hide');
  } else {
    console.log(lNameOk);
  }

}
function lNameReset() {
  lNError.classList.add('txt-hide');
  lNError.innerHTML = "";
}
lName.addEventListener('blur', lNameCheck);  
lName.addEventListener('focus', lNameReset);

function dniCheck() {
  var dniOk = numbersRegex.test(dni.value);
  if (!dniOk) {
    dniErrorMsg = "At least 7 numbers.";
    dniError.innerHTML = dniErrorMsg;
    dniError.classList.remove('txt-hide');
  } else {
    console.log("ID:" + dni.value + " it's OK")
  }
}
function dniReset() {
  dniError.classList.add('txt-hide');
  dniError.innerHTML = "";
}
dni.addEventListener('blur', dniCheck);
dni.addEventListener('focus', dniReset);

function phoneCheck() {
  var phoneOk = phoneRegex.test(phone.value);
  if (!phoneOk) {
    phoneErrorMsg = "Ten numbers required.";
    phoneError.innerHTML = phoneErrorMsg;
    phoneError.classList.remove('txt-hide');
  } else {
    console.log("Phone number: " + phone.value + " it's OK" )
  }
}
function phoneReset() {
  phoneError.classList.add('txt-hide');
  phoneError.innerHTML= "";
}
phone.addEventListener('blur', phoneCheck);
phone.addEventListener('focus', phoneReset);

function adressCheck() {
var adressOk = adressRegex.test(adress.value);
  if (!adressOk) {
    adressErrorMsg = "The adress need Street and numbers";
    adressError.innerHTML = adressErrorMsg;
    adressError.classList.remove('txt-hide');
    console.log("no ba");
  } else {
    console.log("ci ba");
  }
}
function adressReset() {
  adressError.classList.add('txt-hide');
  adressError.innerHTML= "";

}
adress.addEventListener('blur', adressCheck);
adress.addEventListener('focus', adressReset);





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
email.addEventListener('blur', emailValidator);
email.addEventListener('focus', emailReset);

function passValidator() {
  var passOk = passRegex.test(pass.value);
  if (!passOk) {
    passErrorMsg = "Password isn't valid.";
    passError.innerHTML = passErrorMsg;
    passError.classList.remove('txt-hide');
  } else{
    passErrorMsg = "";
  }
}
function passReset() {
  passError.classList.add('txt-hide');
  passError.innerHTML = "";
}
pass.addEventListener('blur', passValidator);
pass.addEventListener('focus', passReset);

function passVerification() {
  if (passVer.value == pass.value) {
  } else{
    passVerErrorMsg = "passwords doesn't match.";
    passVerError.innerHTML = passVerErrorMsg;
    passVerError.classList.remove('txt-hide');
  }
}
function passVerReset() {
  passVerError.classList.add('txt-hide')
  passVerError.innerHTML = "";
}
passVer.addEventListener('blur', passVerification);
passVer.addEventListener('focus', passVerReset);







// form.addEventListener('submit', formValidation);
