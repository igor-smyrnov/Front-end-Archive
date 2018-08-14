"use strict";

var canvas = document.getElementById("karinaCanvas").getContext("2d");
canvas.font = "30px Helvetica";

var Player = function (initPack) {
    var self = {};
    self.id = initPack.id;
    self.number = initPack.number;
    self.x = initPack.x;
    self.y = initPack.y;
    Player.list[self.id] = self;
    return self;
};

Player.list = {};

var Bullet = function (initPack) {
    var self = {};
    self.id = initPack.id;
    self.x = initPack.x;
    self.y = initPack.y;
    Bullet.list[self.id] = self;
    return self;
};

Bullet.list = {};

socket.on('init', function (data) {
    console.log(data);
    for (var i=0; i<data.player.length; i++)
        new Player(data.player[i])
    
    for (var i=0; i<data.bullet.length; i++)
        new Bullet(data.bullet[i])
});

socket.on('update', function (data) {
    for (var i=0; i<data.player.length; i++){
        var pack = data.player[i];
        var player = Player.list[pack.id];
        if(player){
            if(pack.x !== undefined)
                player.x = pack.x;
            if(pack.y !== undefined)
                player.y = pack.y;
        }
    }
    for (var i=0; i<data.bullet.length; i++){
        var pack = data.bullet[i];
        var bullet = Bullet.list[pack.id];
        if(bullet){
            if(pack.x !== undefined)
                bullet.x = pack.x;
            if(pack.y !== undefined)
                bullet.y = pack.y;
        }
    }
});

socket.on('remove', function (data) {
   for (var i=0; i<data.player.length; i++)
       delete Player.list[data.player[i]];

   for (var i=0; i<data.bullet.length; i++)
        delete Bullet.list[data.bullet[i]];
});

setInterval(function () {
    canvas.clearRect(0, 0, 500, 500);
    for (var i in Player.list)
        canvas.fillText(Player.list[i].number, Player.list[i].x, Player.list[i].y);
    for (var i in Bullet.list)
        canvas.fillRect(Bullet.list[i].x-5, Bullet.list[i].y-5, 10, 10);
}, 40);

// --- //

document.onkeydown = function (event) {
    if(event.keyCode === 68) //d
        socket.emit('keyPress',
            {inputId:"right", state:true}
        );
    else if(event.keyCode === 83) //s
        socket.emit('keyPress',
            {inputId:"down", state:true}
        );
    else if(event.keyCode === 65) //a
        socket.emit('keyPress',
            {inputId:"left", state:true}
        );
    else if(event.keyCode === 87) //w
        socket.emit('keyPress',
            {inputId:"up", state:true}
        );
};

document.onkeyup = function (event) {
    if(event.keyCode === 68) //d
        socket.emit('keyPress',
            {inputId:"right", state:false}
        );
    else if(event.keyCode === 83) //s
        socket.emit('keyPress',
            {inputId:"down", state:false}
        );
    else if(event.keyCode === 65) //a
        socket.emit('keyPress',
            {inputId:"left", state:false}
        );
    else if(event.keyCode === 87) //w
        socket.emit('keyPress',
            {inputId:"up", state:false}
        );
};

document.onmousedown = function (event) {
    socket.emit('keyPress', {inputId: 'attack', state: true});
};

document.onmouseup = function (event) {
    socket.emit('keyPress', {inputId: 'attack', state: false});
};

document.onmousemove = function (event) {
    var x = -250 + event.clientX - 8;
    var y = -250 + event.clientY - 8;
    var angle = Math.atan2(y, x) / Math.PI * 180;
    socket.emit('keyPress', {inputId: 'mouseAngle', state: angle})
};