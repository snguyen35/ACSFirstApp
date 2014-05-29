var acs = require('acs');
var validator = require('validator');
var args = arguments[0] || {};

function processLogin(username, password){
    
    function loginUserCallBack(e) {
      if(e.success){
          var user = e.users[0];       
          //save the userId for global access 
          Ti.App.userId = user.id;
            
          var homeController = Alloy.createController('home', {username : user.username });    
          homeController.getView().open();
          
      }else{
          alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
      }
    };
    
    acs.loginUser(username, password, loginUserCallBack);
};


$.btnLogin.addEventListener('click', function(e){
    var username = $.txtUsername.value;
    var password = $.txtPassword.value;
  
    if(validator.isEmptyString(username) || validator.isEmptyString(password)){     
      alert('Please enter username and password !');
    }
    else{
      processLogin(username, password);
    }
});

$.btnRegister.addEventListener("click", function(e){
    var registerController = Alloy.createController('register');        
    registerController.getView().open();        
    //$.index.close();
});

$.txtUsername.value = args.username;
$.txtPassword.value = args.password;
$.index.open();


