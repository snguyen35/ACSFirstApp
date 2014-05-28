var args = arguments[0] || {};

var username = '';
var password = '';
var passwordConf = '';
var isSamePassword = false;
  
$.btnRegister.addEventListener('click', function (e) {
  username = $.txtUsername.value;
  password = $.txtPassword.value;
  passwordConf = $.txtConfPassword.value;
  
  if(password === passwordConf){
      isSamePassword = true;
  }
  alert(isSamePassword);
});


$.btnCancel.addEventListener('click', function (args) {
  var indexController = Alloy.createController('index');
    indexController.getView().open();
});
