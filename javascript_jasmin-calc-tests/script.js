"use strict";

var keys = document.querySelectorAll("#calculator span");
var screen = document.querySelector("#calculator .screen");
var mask = /^\*|^\/|^0|[a-z]|.*\/0.*|.*\+\+|.*\-\-|.*\*\*|.*\/\//i;

function showAlert(errorName) {
    var errors = document.querySelector("#calculator .errors");
    errors.className += " alert alert-danger ";
    errors.innerHTML = errorName;
}

Number.prototype.isFloat = function () {
    return this % 1 !== 0;
};

Number.prototype.isInt = function(){
    return this % 1 === 0;
};

function evalDecorator(evalFunc) {
    return function () {

        // removing all extra symbols
        arguments[0] = arguments[0].replace(mask, "");

        // applying eval function
        var screenVal = evalFunc.apply(this, arguments);

        if (typeof screenVal != "undefined"){
            if (screenVal.isFloat())
                return screenVal.toFixed(3);
            else if (screenVal.isInt())
                return screenVal;
        }
        else return "";
    }
}

var evalDec = evalDecorator(eval);

for (var i = 0; i<keys.length; i++) {
    keys[i].onclick = function () {
        var btnVal = this.innerHTML;

        switch(btnVal) {
            case "C":
                screen.value = '';
                break;
            case "Backspace":
                screen.value = screen.value.slice(0, -1);
                break;
            case "=":
                //TODO: make this a function
                screen.value = evalDec(screen.value);
                break;
            default:
                screen.value += btnVal;
        }
    };
}/*

screen.onkeyup = function (e) {
    //TODO: test for it
    if(screen.value.match(mask))
        showAlert(screen.value);
        screen.value = screen.value.replace(mask, "");
};
*/