"use strict";

let game = new Phaser.Game(1200, 576, Phaser.AUTO, 'phaser-example', {
        preload: preload,
        create: create,
        update: update,
        render: render
    });

    let map;
    let layer;

    function preload () {
        game.load.spritesheet('player', 'client/images/player.png', 48, 45, 22);
        game.load.spritesheet('enemy', 'client/images/marioSmall.png', 34, 34, 7);
        game.load.tilemap('map', 'client/map1-1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tileset', 'client/images/items.png');
    }

    function create () {
        this.stage.backgroundColor = '#5C94FC';

        map = game.add.tilemap('map', 0, 0);
        map.addTilesetImage('items', 'tileset');
        layer = map.createLayer(0);
        layer.resizeWorld();

        map.setCollisionBetween(14, 16);
        map.setCollisionBetween(21, 22);
        map.setCollisionBetween(27, 28);
        map.setCollisionByIndex(10);
        map.setCollisionByIndex(13);
        map.setCollisionByIndex(17);
        map.setCollisionByIndex(40);

        this.player = new Player(this.game);
        this.enemy = new Enemy(this.game);
        this.mushroom = new Mushroom(this.game, this.player, 10);


        map.setTileIndexCallback(12, this.mushroom.increaseStaminaAndDie, this);

        game.physics.arcade.gravity.y = 700;
        game.camera.setFocusOnXY(this.player.x, this.player.y);
    }

    function update () {

    }

function render() {
    this.player.displayInfo();
    this.enemy.displayInfo();
}