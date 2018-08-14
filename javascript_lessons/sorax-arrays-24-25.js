// #25 ES5 methods

var array = ["Hello ", "there ", "beautiful ", "World!"];
var array2 = ["Shield", "Boots", "Helm", "Sword"];
var numbers = [1, 2, 3, 4, 5, 6];

array.forEach(function(element, index, array){
	array[index] = element.toUpperCase();
});

array2 = array2.map(function(e){return e.toUpperCase()});

var filtered = array.filter(function(e){
	return e.indexOf('O') === -1;
});

var more4 = array.every(function(e){
	return e.length > 4
});

var someZ = array.some(function(e){
	return e.indexOf('D') !== -1;
});

var reduced = numbers.reduce(function(a, b){
	return a*(b % 3 === 0 ? b: 1);
});

var reducedToRight = numbers.reduceRight(function(a, b){
	return a-b;
});