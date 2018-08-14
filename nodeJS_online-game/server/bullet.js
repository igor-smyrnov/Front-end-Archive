"use strict";

var Entity = require("./entity");
var Player = require("./player");

var initPack = {player: [], bullet: []};
var removePack = {player: [], bullet: []};

var Bullet = function (parent, angle) {
    var self = Entity();
    self.id = Math.random();
    self.spdX = Math.cos(angle / 180 * Math.PI) * 10;
    self.spdY = Math.sin(angle / 180 * Math.PI) * 10;
    self.parent = parent;
    self.timer = 0;
    self.toRemove = false;

    var super_update = self.update;
    self.update = function () {
        if (self.timer++ > 100)
            self.toRemove = true;
        super_update();

        for (var i in Player.list) {
            var player = Player.list[i];
            if (self.getDistance(player) < 32 && self.parent !== player.id) {
                self.toRemove = true;
            }
        }
    };

    self.getInitPack = function () {
        return {
            id: self.id,
            x: self.x,
            y: self.y
        };
    };

    self.getUpdatePack = function () {
        return {
            id: self.id,
            x: self.x,
            y: self.y
        };
    };

    initPack.bullet.push(self.getInitPack());

    Bullet.list[self.id] = self;
    return self;
};

Bullet.list = {};

Bullet.update = function () {
    var pack = [];
    for (var i in Bullet.list) {
        var bullet = Bullet.list[i];
        bullet.update();
        if (bullet.toRemove) {
            delete Bullet.list[i];
            removePack.bullet.push(bullet.id);
        }
        else {
            pack.push(bullet.getUpdatePack());
        }
    }
    return pack;
};

module.exports = Bullet;
module.exports.initPack = initPack;
module.exports.removePack = removePack;