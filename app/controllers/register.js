var acs = require('acs');
var validator = require('validator');

var username = '';
var password = '';
var passwordConf = '';
var isSamePassword = false;

  
function registerUser(username, password) {
    function createUserCallBack(e) {
        if(e.success){
            var user = e.users[0];
            alert('Create user success');
            var indexController = Alloy.createController('index', {username : user.username, password : user.password});
            indexController.getView().open();          
        }else{
             alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    }; 
    
    function userExistCallback(e) {
        if(e.success){
            acs.createUser(username, password, createUserCallBack);
        }else{
            alert((e.message) || JSON.stringify(e));
        }
    };
       
    acs.userExist(username, userExistCallback);
}

$.btnRegister.addEventListener('click', function (e) {
    username = $.txtUsername.value;
    password = $.txtPassword.value;
    passwordConf = $.txtConfPassword.value;
  
    if(validator.isEmptyString(username) || validator.isEmptyString(password) || validator.isEmptyString(passwordConf)){
        alert('Please enter full infor to register');
    }else{
        if(password === passwordConf){
            registerUser(username, password);
        }
        else{
             alert('Password and Confirm Password do not match');   
        }
    }  
});


$.btnCancel.addEventListener('click', function (e) {
    var indexController = Alloy.createController('index');
    indexController.getView().open();    
});


