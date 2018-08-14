"use strict";

var Entity = function () {
    var self = {
        x: 250,
        y: 250,
        spdX: 0,
        spdY: 0,
        id: ""
    };
    
    self.update = function () {
        self.updatePosition();
    };
    
    self.updatePosition = function () {
        self.x += self.spdX;
        self.y += self.spdY;
    };
    
    self.getDistance = function (point) {
        return Math.sqrt(Math.pow(self.x - point.x, 2) + Math.pow(self.y - point.y, 2));
    };
    
    return self;
};

module.exports = Entity;