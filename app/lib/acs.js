var Cloud = require('ti.cloud');

//////////////
//Users
//////////////

exports.loginUser = function(username, password, callback) {
    Cloud.Users.login({
        login : username,
        password : password
    }, function(e) {
        callback(e);
    });
};

exports.logoutUser = function(callback) {
    Cloud.Users.logout(function(e) {
        callback(e);
    });
};

exports.createUser = function (username, password, callback) {
  Cloud.Users.create({
      username : username,
      password : password,      
      password_confirmation : password,
      email : "",
      first_name : "",
      last_name : ""
  },function(e){
      callback(e)
  });
};

exports.userExist = function (username, callback) {
  Cloud.Users.query({
      where : {
          username : username
      }
  },function (e) {
    callback(e);
  });
}

exports.changePassword = function (password, callback) {
  Cloud.Users.update({
      password : password,
      password_confirmation : password
  },function (args) {
      callback(e);    
  });
};

exports.deleteUser = function (userId, callback) {
  Cloud.Users.remove({
      user_id : userId
  },function (e) {
    callback(e);
  });
}

