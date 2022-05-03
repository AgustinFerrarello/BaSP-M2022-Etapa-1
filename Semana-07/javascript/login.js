var email = document.getElementById('email-log');
var pass = document.getElementById('pass-log');
var emError = document.getElementById('em-hide');
var form = document.getElementById('form-id');
var passError = document.getElementById('pass-hide');

var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

var emailErrorMsg;
var passErrorMsg;

function emailCheck() {
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

//   emailCheck();
//   passCheck();

//   if(emailErrorMsg || passErrorMsg){
  //     var errorMsg = emailErrorMsg + "\n" + passErrorMsg;
  //     alert(errorMsg);
  //   } else {
    //     var successMsg = 'WELCOME!' + '\n' + 'Email: ' + email.value + "\n" + 'Password: ' + pass.value;
    //     alert(successMsg);
    //   }
    // }
    
    var data = {email: 'example'};
    
  function formValidation(event) {
    // fetch('https://basp-m2022-api-rest-server.herokuapp.com/login'.concat('?email=', email.value, '&password=', pass)) {
      fetch('https://basp-m2022-api-rest-server.herokuapp.com/login')
      .then(function (response) {
        console.log(response);
          return response.json()
      })
      .then(function (jsonResponse) {
        console.log(jsonResponse);
      })
      // .then(response => response.json())
      // .then(data => console.log(data));
  }
    

  

form.addEventListener('submit', formValidation);

email.addEventListener('blur', emailCheck);
pass.addEventListener('blur', passCheck);

email.addEventListener('focus', emailReset);
pass.addEventListener('focus', passReset);