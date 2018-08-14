"use strict";

class Player {
    constructor(id, characterMap) {
        this.id = id;
        this.x = 0;
        this.y = 0;
        this.characterMap = characterMap;
        this.currentAnim =  "idleDown";
    }

    setRandPosition(width, height) {
        this.x = Math.floor(Math.random() * (width - 100) + 100);
        this.y = Math.floor(Math.random() * (height - 100) + 100);
    }

    setPlayerPosition(endPoint) {
        this.x = endPoint.x;
        this.y = endPoint.y;
    }

    setAnimation(endPoint, isIdle) {
        let angle = Math.atan2(this.y - endPoint.y, this.x - endPoint.x)*10;

        if(isIdle) {
            if(angle > 10 && angle < 20) this.currentAnim = "idleDown";
            if(angle < -10 && angle > -20) this.currentAnim = "idleUp";
            if(angle > -10 && angle < 10) this.currentAnim = "idleRight";
            if(angle > 20 || angle < -20) this.currentAnim = "idleLeft";
        }
        else {
            if(angle > 10 && angle < 20) this.currentAnim = "walkDown";
            if(angle < -10 && angle > -20) this.currentAnim = "walkUp";
            if(angle > -10 && angle < 10) this.currentAnim = "walkRight";
            if(angle > 20 || angle < -20) this.currentAnim = "walkLeft";
        }
    }

}

module.exports = Player;
