var Client = {};
Client.socket = io.connect();

Client.askNewPlayer = function(){
    Client.socket.emit('newPlayer');
};

Client.askMovePlayer = function(x, y){
	Client.socket.emit('askMovePlayer',{x:x, y:y});
    Client.socket.on('movementData', function(data){
    	console.log(data);
        GameState.movePlayer(data.id, {x:x, y:y}, data.animation);
    });
};

Client.sendMousePosition = function(x,y){
	Client.socket.emit('mouseMovement',{x:x, y:y});
};

Client.socket.on('newPlayer', function(data) {
	GameState.addNewPlayer(data.id, data.x, data.y, data.characterMap, data.currentAnim);
});

Client.socket.on('updatePlayer', function(data) {
	console.log(data);
	// GameState.addNewPlayer(data.id, data.x, data.y, data.characterMap, data.currentAnim);
});

Client.socket.on('allPlayers', function(data) {
	for(let i = 0; i < data.length; i++) {
		GameState.addNewPlayer(data[i].id, data[i].x, data[i].y, data[i].characterMap, data[i].currentAnim);
	}
});

Client.socket.on('animatePlayer',function(data){
    GameState.animatePlayer(data.id, data.currentAnim);
});

Client.socket.on('remove', function(id){
    GameState.removePlayer(id);
});