/**
 * Created by Igor on 6/23/2017.
 */

"use strict";

class Enemy extends Entity {
    constructor(game){
        super(game, 0, 0, 'enemy');
        super.reset()
    }

    update() {
        game.physics.arcade.collide(this, layer);
    }

    displayInfo() {
        super.displayInfo(355, 32);
    }

}