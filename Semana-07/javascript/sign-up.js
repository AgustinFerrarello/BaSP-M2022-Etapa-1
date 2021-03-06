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
var numbers = '1234567890';
var letters = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM';
var numerosyletras='qwertyuiopasdfghjklñzxcvbnm0123456789';

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
//flags
var fNFlag = false;
var lNFlag = false;
var dniFlag = false;
var bDateFlag = false;
var phoneFlag = false;
var addressFlag = false;
var cityFlag = false;
var postFlag = false;
var emailFlag = false;
var passFlag = false;
var passVerFlag = false;

function fNameCheck() {
  var nameOk = fName.value;
  if (nameOk == "") {
    fNErrorMsg = "Name it's empty.";
    fNError.innerHTML = fNErrorMsg;
    fNError.classList.remove('txt-hide');
    fNFlag = false;

  } else if (nameOk.length < 3) {
    fNErrorMsg = "Name needs more than 3 letters.";
    fNError.innerHTML = fNErrorMsg;
    fNError.classList.remove('txt-hide');
    fNFlag = false;
  } else {
    var verfiname = nameOk.replace(/[0-9]/g, '');
    if(verfiname != nameOk){
      fNErrorMsg = "Please, do not use numbers. ";
      fNError.innerHTML = fNErrorMsg;
      fNError.classList.remove('txt-hide');
      fNFlag = false;
    }else{ 
      fNErrorMsg = fName.value;
      fNFlag = true;
    }
  }
}
function fNameReset() {
  fNErrorMsg = "reset";
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
    lNFlag = false;
  } else if (lNameOk.length < 3) {
    lNErrorMsg = "Last name needs more than 3 letters.";
    lNError.innerHTML = lNErrorMsg;
    lNError.classList.remove('txt-hide');
    lNFlag = false;
  } else {
    var verfiname = lNameOk.replace(/[0-9]/g, '');
    if(verfiname != lNameOk){
      lNErrorMsg = "Please, do not use numbers.";
      lNError.innerHTML = lNErrorMsg;
      lNError.classList.remove('txt-hide');
      lNFlag = false;
    }else{
      lNErrorMsg = lName.value;
      lNFlag = true;
      ;
    }
  }
}

function lNameReset() {
  lNError.innerHTML = "reset";
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
    dniFlag = false;
  } else if (dniOk.length < 7 || dniOk.length > 8){
    dniErrorMsg = "DNI must have between 7 and 8 numbers.";
    dniError.innerHTML = dniErrorMsg;
    dniError.classList.remove('txt-hide');
    dniFlag = false;
  } else {
    dniErrorMsg = dni.value;
    dniFlag = true;
  }
}
function dniReset() {
  dniError.innerHTML = "reset";
  dniError.classList.add('txt-hide');
}
dni.addEventListener('blur', dniCheck);
dni.addEventListener('focus', dniReset);

function bDayCheck() {
  var bDayOk = bDate.value
  var month = bDayOk.substring(0, 2);
  var slash1 = bDayOk.substring(2, 3);
  var day = bDayOk.substring(3, 5);
  var slash2 = bDayOk.substring(5, 6);
  var year = bDayOk.substring(6);
  month = Number(month);
  day = Number(day);
  year = Number(year);
  if(month > 12 || month < 1) {
    alert("mes invalido");
    bDateFlag = false;
  } else if (day > 31 || day < 1) {
    alert("dia invalido");
    bDateFlag = false;
  } else if (year > 2022 || year < 1900) {
    alert("año invalido");
    bDateFlag = false;
  } else if(slash1 !== "/" || slash2 !== "/") {
    alert("formato invalido");
    bDateFlag = false;
  } else {
    bDateFlag = true;
  }
}
function bDayReset(){
  
}

bDate.addEventListener('blur', bDayCheck);
// bDate.addEventListener('focus', bDayReset);

function phoneCheck() {
  var phoneOk = phone.value;
  if (phoneOk == "") {
    phoneErrorMsg = "Phone it's empty.";
    phoneError.innerHTML = phoneErrorMsg;
    phoneError.classList.remove('txt-hide');
    phoneFlag = false;
  } else if (phoneOk.length < 10 || phoneOk.length > 10 ) {
    phoneErrorMsg = "Ten numbers required.";
    phoneError.innerHTML = phoneErrorMsg;
    phoneError.classList.remove('txt-hide');
    phoneFlag = false;
  } else {
    phoneErrorMsg = phone.value;
    phoneFlag = true;
  }
}
function phoneReset() {
  phoneError.innerHTML= "reset";
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
    addressFlag = false;
  } else if (addressOk.indexOf(" ") === -1) {
    addressErrorMsg = "Address need an space.";
    addressError.innerHTML = addressErrorMsg;
    addressError.classList.remove('txt-hide');
    addressFlag = false;
  } else if (addressOk.length < 5){
    addressErrorMsg = "St. needs at least 5 letters.";
    addressError.innerHTML = addressErrorMsg;
    addressError.classList.remove('txt-hide');
    addressFlag = false;
  } else {
    var countNum = 0;
    var countLett = 0;
    var countSpace = 0;
    for (let i = 0; i < addressOk.length; i++) {
      var character = addressOk.substring(i, i+1)
      if (letters.indexOf(character) !== -1) {
        countLett = countLett + 1;
      } else if(numbers.indexOf(character) !== -1) {
        countNum = countNum + 1;
      } else if(character.indexOf(" ") !== -1) {
        countSpace = countSpace + 1;
      }
    } if(countLett === 0 || countNum === 0) {
      addressFlag = false;
      addressErrorMsg = "St. needs letter and numbers.";
      addressError.innerHTML = addressErrorMsg;
      addressError.classList.remove('txt-hide');
    } else if(countLett + countNum + countSpace === addressOk.length) {
      addressErrorMsg = "";
      addressError.innerHTML = addressErrorMsg;
      addressError.classList.remove('txt-hide');
      addressFlag = true;
    } else {
      addressErrorMsg = "Please not use special characters.";
      addressError.innerHTML = addressErrorMsg;
      addressError.classList.remove('txt-hide');
      addressFlag = false;
    }
    addressErrorMsg = address.value;
    
    
  } 
}
function addressReset() {
  addressError.innerHTML= "reset";
  addressError.classList.add('txt-hide');
}
address.addEventListener('blur', addressCheck);
address.addEventListener('focus', addressReset);

function cityCheck() {
  var cityOk = city.value;
  if (cityOk == "") {
    cityErrorMsg = "City it's empty.";
    cityError.innerHTML = cityErrorMsg;
    cityError.classList.remove('txt-hide');
    cityFlag = false;
  } else if (cityOk.length < 3) {
    cityErrorMsg = "City needs more than 3 letters.";
    cityError.innerHTML = cityErrorMsg;
    cityError.classList.remove('txt-hide');
    cityFlag = false;
  } else {
    var verficity = cityOk.replace(/[0-9]/g, '');
    if(verficity != cityOk){
      cityErrorMsg = "Please, do not use numbers.";
      cityError.innerHTML = cityErrorMsg;
      cityError.classList.remove('txt-hide');
      cityFlag = false;
    } else {
      cityErrorMsg = city.value;
      cityFlag = true;
    }
  }
}
function cityReset() {
  cityError.innerHTML = "reset";
  cityError.classList.add('txt-hide');
}
city.addEventListener('blur', cityCheck);
city.addEventListener('focus', cityReset);

function postCheck() {
  var postOk = postCode.value;
  if (postOk == "") {
    postErrorMsg = "Postalcode it's empty.";
    postError.innerHTML = postErrorMsg;
    postError.classList.remove('txt-hide');
    postFlag = false;
  } else if (postOk.length < 4 || postOk.length > 5) {
    postErrorMsg = "Postalcode invalid.";
    postError.innerHTML = postErrorMsg;
    postError.classList.remove('txt-hide');
    postFlag = false;
  } else {
    var verfipost = postOk.replace(/[a-zA-Z]/g, '');
    if(verfipost != postOk) {
      postErrorMsg = "Please, do not use letters.";
      postError.innerHTML = postErrorMsg;
      postError.classList.remove('txt-hide');
      postFlag = false;
    } else {
      postErrorMsg = postCode.value;
      postFlag = true;
    }
  }
}
function postReset() {
  postError.innerHTML= "reset";
  postError.classList.add('txt-hide');
}
postCode.addEventListener('blur', postCheck);
postCode.addEventListener('focus', postReset);

function emailCheck() {
  var emailOk = emailRegex.test(email.value);
  if (emailOk == "") {
    emailErrorMsg = "Email it's empty";
    emError.innerHTML = emailErrorMsg;
    emError.classList.remove('txt-hide');
    emailFlag = false;
  } else if (!emailOk) {
    emailErrorMsg = "The email isn't valid.";
    emError.innerHTML = emailErrorMsg;
    emError.classList.remove('txt-hide');
    emailFlag = false;
  } else{
    emailErrorMsg = email.value;
    emailFlag = true;
  }
}
function emailReset() {
  emError.innerHTML = "reset";
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
    passFlag = false;
  } else if (passOk.length < 8) {
    passErrorMsg = "Password must have 8 characters.";
    passError.innerHTML = passErrorMsg;
    passError.classList.remove('txt-hide');
    passFlag = false;
  } else {
    var hasNumbers = false;
    var hasLetters = false;
    var notANumberOrLetter = true;
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
      passErrorMsg = "Password it's OK.";
      passFlag = true;
    } else {
      passErrorMsg = "Password invalid.";
      passError.innerHTML = passErrorMsg;
      passError.classList.remove('txt-hide');
      passFlag = false;
    }
  }
  passErrorMsg = pass.value;
  return true;
  }
  
  function passReset() {
  passError.innerHTML = "reset";
  passError.classList.add('txt-hide');
}
pass.addEventListener('blur', passCheck);
pass.addEventListener('focus', passReset);

function passVerification() {
  if (passVer.value == pass.value) {
    passVerFlag = true;
  } else{
    passVerErrorMsg = "Passwords doesn't match.";
    passVerError.innerHTML = passVerErrorMsg;
    passVerError.classList.remove('txt-hide');
    passVerFlag = false;
  }
}
function passVerReset() {
  passVerError.innerHTML = "reset";
  passVerError.classList.add('txt-hide');
}
passVer.addEventListener('blur', passVerification);
passVer.addEventListener('focus', passVerReset);


function formValidation(event) {
  event.preventDefault();
  if(fNFlag && lNFlag && dniFlag && bDateFlag && phoneFlag && addressFlag && cityFlag && postFlag && emailFlag && 
    passFlag && passVerFlag) {
    var successMsg = 'Complete name: ' + lName.value + fName.value + '\n' + 'ID: ' + dni.value + '\n' + 
    'Birthday: ' + bDateErrorMsg + '\n' + 'Phone: ' + phone.value + '\n' + 'Address: ' + address.value + '\n' 
    + "City: " + city.value + '\n' + 'Postal Code: ' + postCode.value + '\n' + 'E-mail: ' + email.value + '\n' 
    + 'Password: ' + pass.value;
    alert(successMsg);
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup' + '?name=' + fName.value + '&lastName=' + lName.value + '&dni=' + dni.value + '&dob=' + bDate.value + '&phone=' + phone.value + '&address=' + address.value + '&city=' + city.value + '&zip=' + postCode.value + '&email=' + email.value + '&password=' + pass.value;
    fetch(url)
    .then(function (response) {
        return response.json()
      })
      .then(function (jsonResponse) {
        localStorage.setItem("Name", fName.value);
        localStorage.setItem("Lastname", lName.value);
        localStorage.setItem("ID", dni.value);
        localStorage.setItem("Birthday", bDate.value);
        localStorage.setItem("Phone", phone.value);
        localStorage.setItem("Address", address.value);
        localStorage.setItem("City", city.value);
        localStorage.setItem("Zip code", postCode.value);
        localStorage.setItem("E-mail", email.value);
        localStorage.setItem("Password", pass.value);
        alert(jsonResponse.msg);
      })
      .catch(function (error) {
        alert("Server down");
    })
    
  } else {
    var errorMsg = 'First name: ' + fNErrorMsg + '\n' + 'Last name: ' + lNErrorMsg + '\n' + 'ID: ' + dniErrorMsg + 
        '\n' + 'Birthday: ' + bDateErrorMsg + '\n' + 'Phone: ' + phoneErrorMsg + '\n' + 'Address: ' + addressErrorMsg + 
        '\n' + "City: " + cityErrorMsg + '\n' + 'Postal Code: ' + postErrorMsg + '\n' + 'E-mail: ' + emailErrorMsg + 
        '\n' + 'Password: ' + passErrorMsg;
        alert(errorMsg);
  }
}
form.addEventListener('submit', formValidation);


