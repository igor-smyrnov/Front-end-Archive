console.log("\n---JSON---\n");
var user = {
    name: "Grigory",
    id: 6,
    lastVisit: Date.now(),
    friends: [1, 2, 3, 4, 5],
    toJSON: function(){
        return{
            name: this.name,
            lastVisit: this.lastVisit
        }
    }
};

var userData = JSON.stringify(user);

console.log(JSON.parse(userData));