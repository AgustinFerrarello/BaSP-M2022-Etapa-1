var fName = document.getElementById('name-id');
var fNError = document.getElementById('fNameError');
var lName = document.getElementById('ln-id');
var lNError = document.getElementById('lNameError');
var dni = document.getElementById('dni-id');
var dniError = document.getElementById('dniError');
var bDate = document.getElementById('b-date');
var bDateError = document.getElementById('bDayError');
var phone = document.getElementById('phone-id');
var phoneError =document.getElementById('phoneError');
var address = document.getElementById('address-id');
var addressError = document.getElementById('addressError');
var city = document.getElementById('city-id');
var cityError = document.getElementById('cityError');
var postCode = document.getElementById('postal-id');
var postError = document.getElementById('postError');
var email = document.getElementById('email-log');
var pass = document.getElementById('pass-log');
var passVer = document.getElementById('pass-ver');
var emError = document.getElementById('em-hide');
var passError = document.getElementById('pass-hide');
var passVerError = document.getElementById('passVer-hide');
var form = document.getElementById('form-id');

var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

var fNErrorMsg;
var lNErrorMsg;
var dniErrorMsg;
var bDateErrorMsg;
var phoneErrorMsg;
var addressErrorMsg;
var cityErrorMsg;
var postErrorMsg;
var emailErrorMsg;
var passErrorMsg;
var passVerErrorMsg;

function fNameCheck() {
  var nameOk = fName.value;
  if (nameOk == "") {
    fNErrorMsg = "Name it's empty.";
    fNError.innerHTML = fNErrorMsg;
    fNError.classList.remove('txt-hide');
  } else if (nameOk.length < 3) {
    fNErrorMsg = "Name needs more than 3 letters.";
    fNError.innerHTML = fNErrorMsg;
    fNError.classList.remove('txt-hide');
  } else {
    var verfiname = nameOk.replace(/[0-9]/g, '');
    if(verfiname != nameOk){
      fNErrorMsg = "Please, do not use numbers. ";
      fNError.innerHTML = fNErrorMsg;
      fNError.classList.remove('txt-hide');
    }else{ 
      fNErrorMsg = fName.value;
      return true;
    }
  }
}
function fNameReset() {
  fNErrorMsg = '\n';
  fNError.innerHTML = fNErrorMsg;
  fNError.classList.add('txt-hide');
}
fName.addEventListener('blur', fNameCheck);  
fName.addEventListener('focus', fNameReset);

function lNameCheck() {
  var lNameOk = lName.value;
  if (lNameOk == "") {
    lNErrorMsg = "Last name it's empty.";
    lNError.innerHTML = lNErrorMsg;
    lNError.classList.remove('txt-hide');
  } else if (lNameOk.length < 3) {
    lNErrorMsg = "Last name needs more than 3 letters.";
    lNError.innerHTML = lNErrorMsg;
    lNError.classList.remove('txt-hide');
  } else {
    var verfiname = lNameOk.replace(/[0-9]/g, '');
    if(verfiname != lNameOk){
      lNErrorMsg = "Please, do not use numbers.";
      lNError.innerHTML = lNErrorMsg;
      lNError.classList.remove('txt-hide');
    }else{
      lNErrorMsg = lName.value;
      return true;
    }
  }
}

function lNameReset() {
  lNError.innerHTML = "";
  lNError.classList.add('txt-hide');
}
lName.addEventListener('blur', lNameCheck);  
lName.addEventListener('focus', lNameReset);

function dniCheck() {
  var dniOk = dni.value;
  if (dniOk == "") {
    dniErrorMsg = "ID it's empty.";
    dniError.innerHTML = dniErrorMsg;
    dniError.classList.remove('txt-hide');
  } else if (dniOk.length < 7){
    dniErrorMsg = "At least 7 numbers.";
    dniError.innerHTML = dniErrorMsg;
    dniError.classList.remove('txt-hide');
  } else {
    dniErrorMsg = dni.value;
    return true;
  }
}
function dniReset() {
  dniError.innerHTML = "";
  dniError.classList.add('txt-hide');
}
dni.addEventListener('blur', dniCheck);
dni.addEventListener('focus', dniReset);

function phoneCheck() {
  var phoneOk = phone.value;
  if (phoneOk == "") {
    phoneErrorMsg = "Phone it's empty.";
    phoneError.innerHTML = phoneErrorMsg;
    phoneError.classList.remove('txt-hide');
  } else if (phoneOk.length < 10 || phoneOk.length > 10 ) {
    phoneErrorMsg = "Ten numbers required.";
    phoneError.innerHTML = phoneErrorMsg;
    phoneError.classList.remove('txt-hide');
  } else {
    phoneErrorMsg = phone.value;
    return true;
  }
}
function phoneReset() {
  phoneError.innerHTML= "";
  phoneError.classList.add('txt-hide');
}
phone.addEventListener('blur', phoneCheck);
phone.addEventListener('focus', phoneReset);

function addressCheck() {
  var addressOk = address.value;
  if (addressOk == "") {
    addressErrorMsg = "Address it's empty.";
    addressError.innerHTML = addressErrorMsg;
    addressError.classList.remove('txt-hide');
  } else if (addressOk.length < 5){
    addressErrorMsg = "St. needs at least 5 letters.";
    addressError.innerHTML = addressErrorMsg;
    addressError.classList.remove('txt-hide');
  } else {
    addressErrorMsg = address.value;
    return true;
  } 
}
function addressReset() {
  addressError.innerHTML= "";
  addressError.classList.remove('txt-hide');
}
address.addEventListener('blur', addressCheck);
address.addEventListener('focus', addressReset);

function cityCheck() {
  var cityOk = city.value;
  if (cityOk == "") {
    cityErrorMsg = "City it's empty.";
    cityError.innerHTML = cityErrorMsg;
    cityError.classList.remove('txt-hide');
  } else if (cityOk.length < 3) {
    cityErrorMsg = "City needs more than 3 letters.";
    cityError.innerHTML = cityErrorMsg;
    cityError.classList.remove('txt-hide');
  } else {
    var verficity = cityOk.replace(/[0-9]/g, '');
    if(verficity != cityOk){
      cityErrorMsg = "Please, do not use numbers.";
      cityError.innerHTML = cityErrorMsg;
      cityError.classList.remove('txt-hide');
    } else {
      cityErrorMsg = city.value;
      return true;
    }
  }
}
function cityReset() {
  cityError.innerHTML = "";
  cityError.classList.remove('txt-hide');
}
city.addEventListener('blur', cityCheck);
city.addEventListener('focus', cityReset);

function postCheck() {
  var postOk = postCode.value;
  if (postOk == "") {
    postErrorMsg = "Postalcode it's empty.";
    postError.innerHTML = postErrorMsg;
    postError.classList.remove('txt-hide');
  } else if (postOk.length < 4 || postOk.length > 5) {
    postErrorMsg = "Postalcode invalid.";
    postError.innerHTML = postErrorMsg;
    postError.classList.remove('txt-hide');
  } else {
    var verfipost = postOk.replace(/[a-zA-Z]/g, '');
    if(verfipost != postOk) {
      postErrorMsg = "Please, do not use letters.";
      postError.innerHTML = postErrorMsg;
      postError.classList.remove('txt-hide');
    } else {
      postErrorMsg = postCode.value;
      return true;
    }
  }
}
function postReset() {
  postError.innerHTML = "";
  postError.classList.remove('txt-hide');
}
postCode.addEventListener('blur', postCheck);
postCode.addEventListener('focus', postReset);

function emailCheck() {
  var emailOk = emailRegex.test(email.value);
  if (emailOk == "") {
    emailErrorMsg = "Email it's empty";
    emError.innerHTML = emailErrorMsg;
    emError.classList.remove('txt-hide');
  } else if (!emailOk) {
    emailErrorMsg = "The email isn't valid.";
    emError.innerHTML = emailErrorMsg;
    emError.classList.remove('txt-hide');
  } else{
    emailErrorMsg = email.value;
    return true;
  }
}
function emailReset() {
  emError.innerHTML = "";
  emError.classList.remove('txt-hide');
}
email.addEventListener('blur', emailCheck);
email.addEventListener('focus', emailReset);

function passCheck() {
  var passOk = pass.value;
  if (passOk == "") {
    passErrorMsg = "Password it's empty.";
    passError.innerHTML = passErrorMsg;
    passError.classList.remove('txt-hide');
  } else if (passOk.length < 8) {
    passErrorMsg = "Password must have 8 characters.";
    passError.innerHTML = passErrorMsg;
    passError.classList.remove('txt-hide');
  } else {
    var hasNumbers = false;
    var hasLetters = false;
    var notANumberOrLetter = true;
    var numbers = '1234567890';
    var letters = 'abcdefghyjklmnñopqrstuvwxyz';
    var numerosyletras='abcdefghyjklmnñopqrstuvwxyz0123456789';
    for(var i=0; i<passOk.length; i++){
      if (numbers.indexOf(passOk.charAt(i),0)!=-1){
          hasNumbers = true;
      }
    }
    for(var i=0; i<passOk.length; i++){
        if (letters.indexOf(passOk.charAt(i),0)!=-1){
            hasLetters = true;
        }
    }

    for(var i=0; i<passOk.length; i++){
        if (numerosyletras.indexOf(passOk.charAt(i),0)==-1){
            notANumberOrLetter = false;
        }
    }
    if (hasNumbers == true && hasLetters == true && notANumberOrLetter == true){
        passwordFlag = true;
        passErrorMsg = "Password it's OK.";
      } else {
        passErrorMsg = "Password invalid.";
        passError.innerHTML = passErrorMsg;
        passError.classList.remove('txt-hide');
    }
  }
    passErrorMsg = pass.value;
    return true;
  }

function passReset() {
  passError.innerHTML = "";
  passError.classList.remove('txt-hide');
}
pass.addEventListener('blur', passCheck);
pass.addEventListener('focus', passReset);

function passVerification() {
  if (passVer.value == pass.value) {
    return true;
  } else{
    passVerErrorMsg = "Passwords doesn't match.";
    passVerError.innerHTML = passVerErrorMsg;
    passVerError.classList.remove('txt-hide');
  }
}
function passVerReset() {
  passVerError.innerHTML = "";
  passVerError.classList.remove('txt-hide');
}
passVer.addEventListener('blur', passVerification);
passVer.addEventListener('focus', passVerReset);


function formValidation(event) {
  event.preventDefault();
  fNameCheck();
  lNameCheck();
  dniCheck();
  phoneCheck();
  addressCheck();
  cityCheck();
  postCheck();
  emailCheck();
  passCheck();
  passVerification();

  if(fNErrorMsg || lNErrorMsg || dniErrorMsg || phoneErrorMsg || addressErrorMsg || cityErrorMsg || postErrorMsg || 
    emailErrorMsg || passErrorMsg) {
    var errorMsg = 'First name: ' + fNErrorMsg + '\n' + 'Last name: ' + lNErrorMsg + '\n' + 'ID: ' + dniErrorMsg + 
    '\n' + 'Birthday: ' + bDateErrorMsg + '\n' + 'Phone: ' + phoneErrorMsg + '\n' + 'Address: ' + addressErrorMsg + 
    '\n' + "City: " + cityErrorMsg + '\n' + 'Postal Code: ' + postErrorMsg + '\n' + 'E-mail: ' + emailErrorMsg + 
    '\n' + 'Password: ' + passErrorMsg;
    alert(errorMsg);
  } else {
    var successMsg = 'Complete name: ' + lName.value + fName.value + '\n' + 'ID: ' + dni.value + '\n' + 
    'Birthday: ' + bDateErrorMsg + '\n' + 'Phone: ' + phone.value + '\n' + 'Address: ' + address.value + '\n' 
    + "City: " + city.value + '\n' + 'Postal Code: ' + postCode.value + '\n' + 'E-mail: ' + email.value + '\n' 
    + 'Password: ' + pass.value;

    alert(successMsg);
  }
}
form.addEventListener('submit', formValidation);

