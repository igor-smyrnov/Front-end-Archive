"use strict";

var calculator;
var btns;
// Value to display
var currentVal = 0;
var currentInput = "";
var display;
var operators = ["+"];
// Last pressed button: operator or digit
var lastPress = "";
var hasInput = false;
var hasCalculated = false;
var hasOperated = false;
var currentOperator = "";
var lastInput ="";


$(document).ready(function () {
    btns = $(".btn");
    display = $(".display");
    calculator = $(".calculator");

    calculator.on("click", ".btn", onBtnClick);
});

function onBtnClick(event) {
    var target = $(event.target);
    var btnVal = target.text().toLowerCase();

    if(btnVal === "=")
        calculateVal();
        
    else if(operators.indexOf(btnVal) > -1)
        setOperator(btnVal);
        
    else
        appendInput(btnVal);
}

function calculateVal() {

    var inputVal;

    inputVal = currentInput;

    if (hasCalculated)
        inputVal = parseFloat(lastInput);

    else {
        inputVal = parseFloat(currentInput);
        lastInput = inputVal;
    }

    switch (currentOperator) {
        case "+":
            currentVal += inputVal;
            break;
        default:
            break;
    }

    // states
    lastPress = "operator";
    hasInput = false;
    hasCalculated = true;

    updateDisplay (currentVal);
    // currentInput = currentVal.toString();
}

function setOperator(operator) {

    // calculating, if value was operated
    // 2+2+ = 4
    if (hasOperated && lastPress !== "operator")
        calculateVal();
    
    currentOperator = operator;
    currentVal = parseFloat(currentInput);

    if (isNaN(currentVal)) {
        currentVal = 0;
    }

    // statuses
    lastPress = "operator";
    hasOperated = true;
    hasInput = false;
    hasCalculated =false;
}

function appendInput(input) {
    
    if (lastPress === "operator")
        currentInput = input;
    else
        currentInput += input;

    //removing '0' in '02' for example
    if(currentInput.length > 1 && currentInput.slice(0,1) === "0")
        currentInput = currentInput.slice(1, currentInput.length);

    // states
    lastPress = "digit";
    hasInput = true;
    hasCalculated =false;

    updateDisplay(currentInput);
}

function updateDisplay(value) {
    display.val(value);
}