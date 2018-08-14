/**
 * Created by Igor on 7/9/2017.
 */

class Player extends Phaser.Sprite {
    constructor(game){
        super(game, 400, 500, 'ship');
        this.anchor.setTo(0.5, 0.5);
        game.physics.enable(this);
        game.stage.addChild(this);
    }
}