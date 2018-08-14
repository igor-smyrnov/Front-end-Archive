"use strict";

var socket = io();

var signDiv = document.getElementById("signDiv");
var signDivUsername = document.getElementById("signDiv-username");
var signDivPassword = document.getElementById("signDiv-password");
var signDivSignIn = document.getElementById("signDiv-signIn");
var signDivSignUp = document.getElementById("signDiv-signUp");
var gameDiv = document.getElementById("gameDiv");

signDivSignIn.onclick = function () {
    console.log(signDivUsername.value+" "+signDivPassword.value);
    socket.emit('signIn', {username: signDivUsername.value, password: signDivPassword.value})
};

signDivSignUp.onclick = function () {
    socket.emit('signUp', {username: signDivUsername.value, password: signDivPassword.value})
};

socket.on('signUpResponse', function (data) {
    if(data.success)
        alert("Sign up successful.");
    else
        alert("Sign up unsuccessful.");
});

socket.on('signInResponse', function (data) {
    if(data.success) {
        signDiv.style.display = "none";
        gameDiv.style.display = "inline-block";
    }
    else alert("Sign in unsuccessful.");
});
