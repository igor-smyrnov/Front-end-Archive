console.log("\n---scope---\n");

/*var testVar = 10;

function testFunc(){
	testVar = 100;
}
var testObj = {
	run: function(){
		console.log("Test");
	}
}
testFunc();
console.log(testVar);
testObj.run();
console.log(window.testVar);*/

/*var i = 5;

var func = function(){// third element of chain
	var i = 10;
	var innerFunc = function(){// second element of chain
		i = 15;
		var innerInnerFunc = function(){// first element of chain
			console.log(i);// <-- scope of first element of chain
			var i = 13;
		};
		innerInnerFunc();
		console.log(i);// <-- scope of second element of chain
	};
	innerFunc();
	console.log(i);// <-- scope of third element of chain
};

func();*/

/*var func = function(){
	var i = 10;
	return function(){
		return function(){
			return i;			
		};
	};
};

var secondFunc = function(){
	var i = 20;
	console.log(func()()());
};

secondFunc();*/

/*var counter = (function(){
	var count = 0;
	return function(num){
		count = num !== undefined ? num : count;
		return count++;
	}
}());*/

var counter = function(num){
	counter.count = num !== undefined ? num : counter.count++;
	return counter.count;
};

counter.count = 0;

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(9));
console.log(counter());