// #17 Objects

var person = {
	name: "Test",
	age: 24,
	gender: "male",
	sayHi: function(){
		return "Hello";
	}
}

person.age = 25;
person.userID = 5507;

//console.log(person.name);
//console.log(person);
//console.log(person.sayHi());

var test = Object.create({x:10, y:20});

//console.log(test);
//console.log(test.hasOwnProperty("x"));

test.x = 20
//console.log(test);
//console.log(test.hasOwnProperty("x"));

//console.log(test.x);

delete test.x;
//console.log(test);
//
//console.log("x" in test);
//console.log("o" in test);

// #18 this

var person = {
	name: "John",
	greet: function(){
		return console.log("Hi, my name is " + person.name);
	}
};

person.greet();

var greet = function(){
	return console.log("Hi, my name is " + this.name);
}
var person = {
	name: "John",
	greet: greet
};
var anotherPerson = {
	name: "Bob",
	greet: greet
};

//person.greet();
//anotherPerson.greet();
//greet();//???
//anotherPerson.greet.call(person);

		var greet = function(greeting, greeting2){
	if(greeting == undefined || greeting2 == undefined) 
		throw new TypeError("First or second argument not found!");

	return console.log(greeting+" ! "+greeting2+"! My name is "+this.name);
}
var person = {
	name: "John",
	greet: greet
};
var anotherPerson = {
	name: "Bob",
	greet: greet
};

try{
	greet();
}catch(e){
	console.log("Error: " + e.message);
}

//greet.apply(person, ["Hola", "Привет"]);



var greet = function(greeting, greeting2){
	greeting = greeting+"!";
	greeting2 == undefined ? greeting2 = "" : greeting2 = greeting2+"! ";
	return console.log(greeting+" "+greeting2+"My name is "+this.name);
}
var person = {
	name: "John",
	greet: greet
};
var anotherPerson = {
	name: "Bob",
	greet: greet
};

/*person.greet("Hi");
anotherPerson.greet.call(person, "Bonjour");
greet.call(anotherPerson, "Cześć");
greet.apply(person, ["Hola", "Привет"]);

var bound = greet.bind(anotherPerson);
bound("Hello there");*/

var person = {
	name: "John",
	_age: 20,
	get age(){
		return console.log(this._age);
	},
	set age(value){
		this._age = value < 0 ? 0 : value > 122 ? 122 : value;
	}
};
//		person.age = 180;
//		person.age;

//		console.log(Object.getOwnPropertyDescriptor(person, "name"));
//		console.log(Object.getOwnPropertyDescriptor(person, "age"));

Object.defineProperty(person, "gender", {
	value: "male",
	writable: false,
	enumerable: false,
	configurable: false
});
//		Object.defineProperty(person, "gender", {
//			writable: true
//		});

//		console.log(person.gender);
//		person.gender = "female";
//		console.log(person.gender);

//		for(property in person){
//			console.log(property);
//		}
//console.log(Object.keys(person));
//console.log(person.propertyIsEnumerable("gender"));

var o = {};
Object.defineProperties(o, {
	x:{
		value: 10,
		writable: false
	},
	y:{
		value: 20,
		writable: false
	},
	r:{
		// vector length
		get: function(){
			return Math.sqrt(this.x * this.x + this.y * this.y);
		}
	}
});

o.x = 16;
//		console.log(o.r);

var obj = {};

//		Object.preventExtensions(obj);
//		console.log(Object.isExtensible(obj));
//		
//		obj.x = 2323;
//		console.log(obj.x);

Object.seal(obj);
//console.log(Object.isSealed(obj));

Object.freeze(obj);
//console.log(Object.isFrozen(obj));

// #20 prototyping and inheritance

		var a = 10, b = 20;

a = b;
b = 15;

console.log(a);

var a = {x:10}, b = {x:20};

a = b;
b.x = 15;

//console.log(a.x);


var Person = {
	constructor: function(name, age, country){
		this.name = name;
		this.age = age;
		this.country = country;
		return this;
	},
	greet: function(){
		console.log(`Hello I'm ${this.name} from ${this.country}`);
	}
};

//		var person1, person2, person3;
//		
//		person1 = Object.create(Person).constructor("John", 35, "Canada");
//		person2 = Object.create(Person).constructor("Nil", 22, "Azerbaidzian");
//		person3 = Object.create(Person).constructor("Alfil", 33, "Marokko");
//		
//		person1.greet();
//		person2.greet();
//		person3.greet();
//		
//		console.log(Person.isPrototypeOf(person1));
//		console.log(person1.isPrototypeOf(Person));

var WebDeveloper = Object.create(Person);
WebDeveloper.constructor = function(name, age, gender, skills){
	Person.constructor.apply(this, arguments);
	this.skills = skills || [];
	return this;
};
WebDeveloper.develop = function(){
	console.log("Working...");
};

var developer = Object.create(WebDeveloper).constructor("Igor", 22, "Ukraine", ["JavaScript", "AngularJS"]);
//developer.greet();
//console.log(developer.skills);
//developer.develop();

// #21 constructores and classes

		var Person, person, anotherPerson, Developer, developer;

Person = function(name){
	this.name = name;
};

Person.prototype.greet = function(){
	console.log(`Hello my name is ${this.name}`)
}

//		person = new Person("Jack");
//		console.log(person.name);
//		person.greet();
//		
//		anotherPerson = new Person("Nil");
//		console.log(anotherPerson.name);
//		anotherPerson.greet();

Developer = function(name, skill){
	Person.apply(this, arguments);
	this.skills = skill || [];
};

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.contructor = Developer;

developer = new Developer("John", ["Ruby", "ror", "php"]);

//console.log(developer.name);
//console.log(developer.skills);
//
//console.log(developer instanceof Developer);
//console.log(developer instanceof Person);

// #22 method chaining

var string, newString;

string = "Sometimes the same is different";

newString = string
	.replace("is", "is not")
	.concat(" actually")
	.toUpperCase()
	.replace(/ /g, "\n")
	.slice(10);

//console.log(newString);
