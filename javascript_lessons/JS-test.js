
	//Example 1
console.log("Example 1");
for(var key in  {1:1, 0:0}){
	console.log(key);
}

	//Example 2
console.log("Example 2");

function User() { }
User.prototype = { admin: false };
var user = new User();
console.log(user.admin);

	//Example 3
console.log("Example 3");

var name = "google".replace("g", "d");
console.log(name);

	//Example 4
console.log("Example 4");

console.log(4 - "5" + 0xf - "1e1");

	//Example 5
console.log("Example 5");

f.call(f);
function f() {
  console.log( this );
}

	//Example 6
console.log("Example 6");

var i=5;
console.log(i++);
console.log(++i);

	//Example 7
console.log("Example 7");

for(var i=0; i<10; i++) {}
console.log(i);

	//Example 8
console.log("Example 8");

if(function(){}){
	console.log(typeof(f));
}

	//Example 9
console.log("Example 9");

console.log(true+false);

	//Example 10
console.log("Example 10");

console.log(parseInt("1px"));
console.log(parseInt("-1.2"));
console.log(parseInt("0 минут"));
console.log(parseInt("$1.2"));

	//Example 11
console.log("Example 11");

function User() { }
User.prototype = { admin: false };
var user = new User();
User.prototype = { admin: true };
console.log(user.admin);

	//Example 12
console.log("Example 12");

console.log(1.15 + 2.30);

	//Example 13
console.log("Example 13");

console.log(0 || 1 && 2 || 3);

	//Example 14
console.log("Example 14");

function F() { return F; }
console.log( new F() instanceof F );
console.log( new F() instanceof Function );

	//Example 15
console.log("Example 15");

var arr1 = new Array.prototype.constructor(1, 2);
console.log(arr1);
var arr2 = new Array(1, 2);
console.log(arr2);
var arr3 = Array(1, 2);
console.log(arr3);
var arr4 = [1, 2];
console.log(arr4);

	//Example 16
console.log("Example 16");

/*var f = function g(){ return 23; };
console.log( typeof g() );*/
//Uncaught ReferenceError: g is not defined

	//Example 17
console.log("Example 17");

var a = new Array(1,2), b = new Array(3);
console.log(a[0] + b[0]);

	//Example 18
console.log("Example 18");

X = NaN;
var a = X;
console.log( a == X );

	//Example 19
console.log("Example 19");

console.log( +"Infinity" );

	//Example 20
console.log("Example 20");

var arr = [1, 2, 3];
arr.something = 5;

console.log(arr.something);

	//Example 21
console.log("Example 21");

console.log(typeof null);

//'use strict';

console.log(typeof null);

	//Example 22
console.log("Example 22");

var a1 = function(a,b) { return a+b }
console.log(a1(5,6));
var a2 = new Function("a,b", "return a+b");
console.log(a2(5,6));
var a3 = new Function("a", "b", "return a+b");
console.log(a3(5,6));

	//Example 23
console.log("Example 23");

var a=5, b=6;

console.log(!!( a && b ));
console.log(a && b);  

	//Example 24
console.log("Example 24");

/*var a=5**5;
console.log(a);*/
//Uncaught SyntaxError: Unexpected token *

	//Example 25
console.log("Example 25");

/*var name = "Dima";
function sayHi() {
  console.log(name);
}
setTimeout(function() {
  var name = "Petia";
  sayHi();
}, 1000);*/

	//Example 26
console.log("Example 26");

var y = 1;
var x = y = typeof x;

console.log(x + 1);

	//Example 27
console.log("Example 27");

console.log([] + false - null + true);
