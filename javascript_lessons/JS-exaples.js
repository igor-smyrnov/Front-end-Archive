function Person(name){
  	this.name = name;
}

Person.prototype.greet = function(otherName){
  	this.otherName = otherName;
  	return "Hi " + otherName + ", my name is " + this.name;
}

var p = new Person("Joe");
console.log(p.greet("Kate"));
