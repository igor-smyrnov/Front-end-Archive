/**
 * Created by Igor on 7/2/2017.
 */
"use strict";

let game = new Phaser.Game(800, 600, Phaser.CANVAS, '');
game.state.add('Boot', Game.Boot);
game.state.add('Preloader', Game.Preloader);
game.state.add('MainMenu', Game.MainMenu);
game.state.add('Level1', Game.Level1);

game.state.start('Boot');