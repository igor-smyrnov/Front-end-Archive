console.log("\n---functions---\n");

//function declaration statement

/*function greet(name) {
    return "Hello " + name;
}*/
//function definition expression

/*var greet = function(name) {
    console.log(arguments);
    return "Hello " + name; 
};

console.log(greet("you"));*/

var func = function(callback) {
    var name = "Test";
    callback(name);
}

func(function(n){
	console.log("Hello " + n);
});

var func = function(){
	return function(){
		console.log("Hi");
	}
}
func()();

var greeting = (function(name) {
    return console.log("Hello " + name); 
}("Test2"));