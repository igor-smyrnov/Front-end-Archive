/**
 * Created by Igor on 6/23/2017.
 */

class Mushroom {
    constructor(game, player, strength) {
        this.player = player;
        this.strength = strength;

        this.displayFields();
    }

    displayFields() {
        console.log(this);
    }

    increaseStaminaAndDie(sprite, tile) {
        console.log(this.strength);
        this.player.increaseStamina(10);
        map.removeTile(tile.x, tile.y, layer);
    }
}
