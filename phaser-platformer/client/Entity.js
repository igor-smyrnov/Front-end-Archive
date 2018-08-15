/**
 * Created by Igor on 6/24/2017.
 */

"use strict";

class Entity extends Phaser.Sprite {
    constructor(game, x, y, spriteName){
        super(game, x, y, spriteName);
        this.anchor.setTo(0.5, 0.5);
        game.physics.enable(this);
        game.stage.addChild(this);
    }

    displayInfo(x, y) {
        game.debug.start(x, y);
        game.debug.line(`body.velocity.x: ${this.body.velocity.x}`);
        game.debug.line(`x: ${this.x}`);
        game.debug.line(`y: ${this.y}`);

    }
}