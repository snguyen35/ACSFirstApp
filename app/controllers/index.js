var Cloud = require('ti.cloud');
var validator = require('validator');

function setLoginbutton() {
    $.btnLogin.title = "Login";
    $.btnLogin.addEventListener('click', function (e) {
      var username = $.txtUsername.value;
      var password = $.txtPassword.value;
      
      if(validator.isEmptyString(username) || validator.isEmptyString(password)){     
        alert('Please enter username and password !');
      }
      else{
        processLogin(username, password);
      }
    });    
}

function processLogin(username, password){
    
    
}

$.btnRegister.addEventListener("click", function(e){
    var registerController = Alloy.createController('register');
    registerController.getView().open();    
});


$.index.open();


