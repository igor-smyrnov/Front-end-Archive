"use strict";

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server,{});

app.get('/',function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
app.use('/assets',express.static(__dirname + '/assets'));
app.use('/bower_components',express.static(__dirname + '/bower_components'));

let listener = server.listen(3001, function(){
    console.log('Listening on port ' + listener.address().port);
});

const characterMaps = require('./server/characterMaps.json');
const config = require('./server/config.json');
let Player = require('./server/Player');

server.lastPlayerID = 0;

io.sockets.on('connection', function(socket){
	socket.on('newPlayer', function () {

        let characterNum = Math.floor(Math.random() * characterMaps.length);
        socket.player = new Player(server.lastPlayerID++, characterMaps[characterNum]);
	    socket.player.setRandPosition(config.displayWidth, config.displayHeight);
		
		socket.emit('allPlayers', getAllPlayers());
        socket.broadcast.emit('newPlayer', socket.player);
		
		socket.on('askMovePlayer',function(endPoint){
            socket.player.setAnimation(endPoint, false);
            socket.emit('movementData',
                {id:socket.player.id,
                    animation:socket.player.currentAnim
                });
            socket.player.setPlayerPosition(endPoint);
            socket.emit('updatePlayer', socket.player);
        });
		
/*		socket.on('mouseMovement',function(data){
			
			socket.player.currentAnim = getAnimationByPoint(data, socket.player, true);
            io.emit('animatePlayer', socket.player);
        });*/
		
		socket.on('disconnect',function(){
            io.emit('remove', socket.player.id);
        });
	});
});

function getAllPlayers(){
    let players = [];
    Object.keys(io.sockets.connected).forEach(function(socketID){
        let player = io.sockets.connected[socketID].player;
        if(player) players.push(player);
    });
    return players;
}