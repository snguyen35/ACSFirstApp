function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "register";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.register = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "register"
    });
    $.__views.register && $.addTopLevelView($.__views.register);
    $.__views.body = Ti.UI.createView({
        layout: "vertical",
        borderWidth: "3dp",
        borderColor: "#3867a3",
        borderRadius: "5dp",
        width: "75%",
        height: "75%",
        id: "body"
    });
    $.__views.register.add($.__views.body);
    $.__views.labelTitle = Ti.UI.createLabel({
        color: "black",
        top: "20dp",
        height: "30dp",
        text: "Register new account",
        id: "labelTitle"
    });
    $.__views.body.add($.__views.labelTitle);
    $.__views.usernameContainer = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: "20dp",
            left: "20dp",
            right: "20dp",
            height: "60dp",
            layout: "vertical"
        });
        _.extend(o, {
            id: "usernameContainer"
        });
        return o;
    }());
    $.__views.body.add($.__views.usernameContainer);
    $.__views.lbUsername = Ti.UI.createLabel({
        color: "black",
        left: "0dp",
        text: "Username :",
        id: "lbUsername"
    });
    $.__views.usernameContainer.add($.__views.lbUsername);
    $.__views.txtUsername = Ti.UI.createTextField(function() {
        var o = {};
        _.extend(o, {
            color: "black"
        });
        Alloy.isHandheld && _.extend(o, {
            left: "0dp",
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            focusable: true,
            borderWidth: "1dp",
            borderRadius: "5px",
            borderColor: "#626265"
        });
        _.extend(o, {
            id: "txtUsername"
        });
        return o;
    }());
    $.__views.usernameContainer.add($.__views.txtUsername);
    $.__views.passwordContainer = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: "20dp",
            left: "20dp",
            right: "20dp",
            height: "60dp",
            layout: "vertical"
        });
        _.extend(o, {
            id: "passwordContainer"
        });
        return o;
    }());
    $.__views.body.add($.__views.passwordContainer);
    $.__views.lbPassword = Ti.UI.createLabel({
        color: "black",
        left: "0dp",
        text: "Password :",
        id: "lbPassword"
    });
    $.__views.passwordContainer.add($.__views.lbPassword);
    $.__views.txtPassword = Ti.UI.createTextField(function() {
        var o = {};
        _.extend(o, {
            color: "black"
        });
        Alloy.isHandheld && _.extend(o, {
            left: "0dp",
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            passwordMask: true,
            borderWidth: "1dp",
            borderRadius: "5px",
            borderColor: "#626265"
        });
        _.extend(o, {
            id: "txtPassword"
        });
        return o;
    }());
    $.__views.passwordContainer.add($.__views.txtPassword);
    $.__views.passwordConfirmContainer = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: "20dp",
            left: "20dp",
            right: "20dp",
            height: "60dp",
            layout: "vertical"
        });
        _.extend(o, {
            id: "passwordConfirmContainer"
        });
        return o;
    }());
    $.__views.body.add($.__views.passwordConfirmContainer);
    $.__views.lbConfPassword = Ti.UI.createLabel({
        color: "black",
        left: "0dp",
        text: "Confirm Password :",
        id: "lbConfPassword"
    });
    $.__views.passwordConfirmContainer.add($.__views.lbConfPassword);
    $.__views.txtConfPassword = Ti.UI.createTextField(function() {
        var o = {};
        _.extend(o, {
            color: "black"
        });
        Alloy.isHandheld && _.extend(o, {
            left: "0dp",
            width: Ti.UI.FILL,
            height: Ti.UI.FILL,
            passwordMask: true,
            borderWidth: "1dp",
            borderRadius: "5px",
            borderColor: "#626265"
        });
        _.extend(o, {
            id: "txtConfPassword"
        });
        return o;
    }());
    $.__views.passwordConfirmContainer.add($.__views.txtConfPassword);
    $.__views.btnContainer = Ti.UI.createView({
        top: "20dp",
        left: "20dp",
        right: "20dp",
        height: "50dp",
        layout: "horizontal",
        id: "btnContainer"
    });
    $.__views.body.add($.__views.btnContainer);
    $.__views.btnRegister = Ti.UI.createButton({
        left: "0dp",
        height: "80%",
        width: "40%",
        color: "#14396a",
        borderWidth: "1dp",
        borderColor: "#3867a3",
        borderRadius: "5dp",
        backgroundColor: "#468dcf",
        backgroundSelectedColor: "#63b9ee",
        id: "btnRegister",
        title: "Register"
    });
    $.__views.btnContainer.add($.__views.btnRegister);
    $.__views.btnCancel = Ti.UI.createButton({
        left: "20%",
        height: "80%",
        width: "40%",
        color: "#14396a",
        borderWidth: "1dp",
        borderColor: "#990000",
        borderRadius: "5dp",
        backgroundColor: "#FF7070",
        backgroundSelectedColor: "#CC3300",
        id: "btnCancel",
        title: "Cancel"
    });
    $.__views.btnContainer.add($.__views.btnCancel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var username = "";
    var password = "";
    var passwordConf = "";
    var isSamePassword = false;
    $.btnRegister.addEventListener("click", function() {
        password = $.txtPassword.value;
        passwordConf = $.txtConfPassword.value;
        password === passwordConf && (isSamePassword = true);
        alert(isSamePassword);
    });
    $.btnCancel.addEventListener("click", function() {
        username = $.txtUsername.value;
        password = $.txtPassword.value;
        alert(username + "---" + password);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;