// Item
var Item, Weapon, sword, Person, HeroPC, HeroPCdata, Inventory;
Item = {
	constructor: function(name, type){
		this.name = name;
		this.type = type;
		return this;
	}
}
// Weapon
Weapon = Object.create(Item);
Weapon.constructor = function(name, type, hit){
	Item.constructor.apply(this, arguments);
	this.hit = hit;
	return this;
};

// better way for add items to inventory
// addTo Inventory: [sword, helmet];

// Inventory
/*Inventory = {
	head: null,
	body: null,
	leftHand: null,
	rightHand: null,
	addItem: function(item){
		switch(item){
			case Weapon: this.leftHand = item
				break
			case Helm: this.head = item
				break
			case Wear: this.body = item
				break
		}
	}
}*/

// Person
Person = {
	constructor: function(name, /*inventory*/ weapon, strength, hitPoints){
		this.name = name;
		this.weapon = weapon;
		this.hitPoints = hitPoints;
		this.strength = strength;
		return this;
	},
	attack: function(person){
		value = this.strength/2 + this.weapon.hit;
		value = value >= 50 ? value - Math.round(Math.random() * -(value/10) - (value/10)) : value;
		person.hitPoints = person.hitPoints - value;
		return person.hitPoints;
	},
	isDead: function(){
		return this.hitPoints <= 0 ? 1 : 0;
	}
}

//HeroPCinv = Object.create(Inventory);

/*HeroPCdata = {
	name: "Test",
	inventory: HeroPCinv,
	strenght: 20
}*/
sword = Object.create(Weapon).constructor("Long sword", "Weapon", 50);
noWeapon = Object.create(Weapon).constructor("Hands", "Weapon", 0);

Hero1 = Object.create(Person).constructor("Test", sword, 20, 100);
Hero2 = Object.create(Person).constructor("Test", noWeapon, 30, 200);

var x1 = 0;
var x2 = 0;

for(i=-100; i<= 200; i+=0.5){
	
	if(i<=100) x1 = 1;
	else x1 = 0;
	
	if(!(i>100)) x2 = 1;
	else x2 = 0;
	
	if(x1!==x2) console.log(i);
	
}

// from file
// from json <script>