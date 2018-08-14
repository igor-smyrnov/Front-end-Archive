"use strict";

let socket = io();

let GameState = {
	
    preload: function () {
		game.load.spritesheet('gargoyle', 'assets/images/gargoyle.png', 32, 50, 12);
		game.load.spritesheet('ghost', 'assets/images/ghost.png', 32, 50, 12);
		game.load.spritesheet('samurai', 'assets/images/samurai.png', 32, 50, 12);
		game.load.spritesheet('skeleton', 'assets/images/skeleton.png', 32, 50, 12);
		
    },

    create: function () {	
		this.playerMap = {};	
		Client.askNewPlayer();
    },

    update: function () {
		let activePointer = game.input.activePointer;
		if(activePointer.isDown) {
			Client.askMovePlayer(activePointer.x, activePointer.y);
		}
		if(activePointer.position)
			Client.sendMousePosition(activePointer.x, activePointer.y);
		
    },
	
	addNewPlayer: function (id, x, y, characterMap, currentAnim) {
		
		this.playerMap[id] = game.add.sprite(x, y, characterMap.name);
		
		for(let key in characterMap.animations) {
			this.playerMap[id].animations.add(key, characterMap.animations[key]);
		}
		
		this.playerMap[id].animations.play(currentAnim, 5);
		
	},
	
	removePlayer: function(id) {
		this.playerMap[id].destroy();
		delete this.playerMap[id];
	},
	
	movePlayer: function(id, endPoint, animation){
		let player = this.playerMap[id];
		let distance = Phaser.Math.distance(player.x, player.y, endPoint.x, endPoint.y);
		let duration = distance*10;
		let tween = game.add.tween(player);
		tween.to({x:endPoint.x, y:endPoint.y}, duration);
		tween.start();
		this.animatePlayer(id, animation)
	},
	
	animatePlayer: function (id, currentAnim) {
		this.playerMap[id].animations.play(currentAnim, 5);
	}
};

let game = new Phaser.Game(1500, 500, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');