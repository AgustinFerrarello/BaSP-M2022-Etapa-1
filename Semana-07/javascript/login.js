var email = document.getElementById('email-log');
var pass = document.getElementById('pass-log');
var emError = document.getElementById('em-hide');
var form = document.getElementById('form-id');
var passError = document.getElementById('pass-hide');

var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

var emailErrorMsg;
var passErrorMsg;

var emailFlag = "mal";
var passFlag = "mal";

function emailCheck() {
  var emailOk = emailRegex.test(email.value);
  if (!emailOk) {
    emailErrorMsg = "The email isn't valid.";
    emError.innerHTML = emailErrorMsg;
    emError.classList.remove('txt-hide');
    emailFlag = "mal"
  } else{
    emailErrorMsg = "";
    emailFlag = "bien";
  }
}
function emailReset() {
  emError.classList.add('txt-hide');
  emError.innerHTML = "";
}

function passCheck() {
  var passOk = pass.value;
  if (passOk == "") {
    passErrorMsg = "Password it's empty.";
    passError.innerHTML = passErrorMsg;
    passError.classList.remove('txt-hide');
    passFlag = "mal"
  } else if (passOk.length < 8) {
    passErrorMsg = "Password must have 8 characters.";
    passError.innerHTML = passErrorMsg;
    passError.classList.remove('txt-hide');
    passFlag = "mal";
  } else {
      var hasNumbers = false;
      var hasLetters = false;
      var notANumberOrLetter = true;
      var numbers = '1234567890';
      var letters = 'abcdefghyjklmnñopqrstuvwxyzQWERTYUIOPASDFGHJKLÑZXCVBNM';
      var numerosyletras='abcdefghyjklmnñopqrstuvwxyzQWERTYUIOPASDFGHJKLÑZXCVBNM0123456789';
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
          passFlag = "bien";
        } else {
          passErrorMsg = "Password invalid.";
          passError.innerHTML = passErrorMsg;
          passError.classList.remove('txt-hide');
          passFlag = "mal";
      }
  }
  passErrorMsg = pass.value;
  return true;
}
 
function passReset() {
  passError.innerHTML = "";
  passError.classList.remove('txt-hide');
}

var btn = document.getElementById('btn');
var emailFlag = false;
btn.onclick = function(e) {
  e.preventDefault();
  if (passFlag === "bien" && emailFlag === "bien"){
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login' + '?email=' + email.value + '&password=' + pass.value;
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (jsonResponse) {
        alert(jsonResponse.msg);
      })
      .catch(function (error) {
        alert(error.msg);
    })
  } else if(passFlag !== "bien") {
    alert(passErrorMsg);
  } else {
    alert(emailErrorMsg)
  }
}

email.addEventListener('blur', emailCheck);
pass.addEventListener('blur', passCheck);

email.addEventListener('focus', emailReset);
pass.addEventListener('focus', passReset);