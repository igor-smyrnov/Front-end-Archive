// Strings
console.log("Strings:");

console.log("First string".length);
console.log("Second \n\"test\" \n\tlong \n\t\tstring");

var string = "Very-very-very long string";
console.log(string.charAt(string.length-1));
console.log(string.substring(5, 8));
console.log(string.substr(5, 8));
console.log(string.slice(-5));
console.log(string.indexOf("ve"));
console.log(string.lastIndexOf("ry"));
console.log(string.replace("ve", "dr"));
console.log(string.split(" "));
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string[5]);

// Type conversion
console.log("Type conversion:");

console.log(5+"5");
console.log(typeof(5+"5"));
console.log("5"*"5");
console.log(typeof("5"*"5"));
console.log("5"*"hi");
console.log(typeof("5"*"hi"));

console.log("5" == 5);
console.log("0" == false);

console.log(Number("333"));
console.log(typeof(Number("333")));        
console.log(String(4443));
console.log(typeof(String(4443)));        
console.log(Boolean(4443));
console.log(typeof(Boolean(4443)));

console.log(!!5);
console.log(!!0);

// string
console.log("56");
console.log(typeof("56"));
// number
console.log(+"56");
console.log(typeof +"56");

// function
var num = 555;
console.log(typeof(num.toString));

// string
var num = 555;
console.log(typeof(num.toString()));

// radx
var num = 555;
console.log(num.toString(2));
console.log(num.toString(16));

// string
var num = "555 px";
console.log(parseInt(num));
console.log(parseInt(num, 16));

var numFloat = 55.5;
console.log(parseInt(numFloat));
console.log(parseFloat(numFloat));

console.log(String(NaN));
console.log(typeof(String(NaN)));
console.log(+"");

console.log(+"   5");
console.log(+" t  5");

//var n = null;
//console.log(n.value);