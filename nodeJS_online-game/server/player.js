"use strict";

var Entity = require("./entity");
var Bullet = require("./bullet");

var initPack = {player: [], bullet: []};
var removePack = {player: [], bullet: []};

var Player = function (id) {
    var self = Entity();
    self.id = id;
    self.number = "" + Math.floor(10 * Math.random());
    self.pressingRight = false;
    self.pressingLeft = false;
    self.pressingUp = false;
    self.pressingDown = false;
    self.pressingAttack = false;
    self.mouseAngle = 0;
    self.maxSpd = 10;

    var super_update = self.update;
    self.update = function () {
        self.updateSpd();
        super_update();

        if (self.pressingAttack) {
            self.shootBullet(self.mouseAngle)
        }
    };

    self.shootBullet = function (angle) {
        var bullet = Bullet(self.id, angle);
        bullet.x = self.x;
        bullet.y = self.y;
    };

    self.updateSpd = function () {
        if (self.pressingRight)
            self.spdX = self.maxSpd;
        else if (self.pressingLeft)
            self.spdX = -self.maxSpd;
        else self.spdX = 0;

        if (self.pressingUp)
            self.spdY = -self.maxSpd;
        else if (self.pressingDown)
            self.spdY = self.maxSpd;
        else self.spdY = 0;
    };

    self.getInitPack = function () {
        return {
            id: self.id,
            x: self.x,
            y: self.y,
            number: self.number
        };
    };

    self.getUpdatePack = function () {
        return {
            id: self.id,
            x: self.x,
            y: self.y
        };
    };

    initPack.player.push(self.getInitPack());

    Player.list[id] = self;

    return self;
};
Player.list = {};

Player.onConnect = function (socket) {
    var player = Player(socket.id);
    socket.on("keyPress", function (data) {
        if (data.inputId === "left")
            player.pressingLeft = data.state;
        else if (data.inputId === "right")
            player.pressingRight = data.state;
        else if (data.inputId === "up")
            player.pressingUp = data.state;
        else if (data.inputId === "down")
            player.pressingDown = data.state;
        else if (data.inputId === "attack")
            player.pressingAttack = data.state;
        else if (data.inputId === "mouseAngle")
            player.mouseAngle = data.state;
    });
};

Player.onDisconnect = function (socket) {
    delete Player.list[socket.id];
    removePack.player.push(socket.id);
};

Player.update = function () {
    var pack = [];
    for (var i in Player.list) {
        var player = Player.list[i];
        player.update();
        pack.push(player.getUpdatePack());
    }
    return pack;
};

/*module.exports = {
    Player: Player,
    initPack: initPack,
    removePack: removePack
};*/

module.exports = Player;
module.exports.initPack = initPack;
module.exports.removePack = removePack;