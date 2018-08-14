// False values
console.log("False values:");

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));

// Logic
console.log("Logic:");

console.log("and");
console.log(true && false);
console.log(true && true);
console.log(false && false);

console.log("or");
console.log(true || false);
console.log(true || true);
console.log(false || false);

console.log("Not");
console.log(!true);
console.log(!false);

// Variables
console.log("Variables:");

var a = 0,
	isTrue = true;
isTrue && (a = 5);
console.log(a);

var String1 = "String 1";
var String2 = String1 || "String 2";
console.log(String2);

String1 = "";
String2 = String1 && "String 2";
console.log(String2);

// type of null and undefined
console.log("typeof null and undefined:");

console.log(typeof null);
console.log(typeof undefined);

// undefined cases
console.log("undefined cases:");

var tmp;
var obj = {};
var arr = [1, 2, 3];

console.log(tmp);
console.log(obj.prop);
console.log(a[3]);

// undefined functions
console.log("undefined functions:");

function greet(test){
	//return "Hello " + test;
}

console.log(greet("test"));
console.log(greet());

// null & undefined
console.log("null & undefined:");

console.log(null == undefined);
console.log(null === undefined);