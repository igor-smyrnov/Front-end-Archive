"use strict";

var mongojs = require('mongojs');
var db = mongojs('localhost:27017/knightsCity', ['account', 'progress']);

var express = require('express');
var app = express();
var server = require('http').Server(app);

app.get('/',function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

server.listen(2000);
console.log("Server started");

var Player = require("./server/player");
var Bullet = require("./server/bullet");

var SOCKET_LIST = {};
var DEBUG = true;

var isValidPassword = function (data, callBack) {
    db.account.find({username:data.username, password:data.password}, function (error, result) {
        if(result.length > 0)
            callBack(true);
        else
            callBack(false);
    });
};

var isUsernameTaken = function (data, callBack) {
    db.account.find({username:data.username}, function (error, result) {
        if(result.length > 0)
            callBack(true);
        else
            callBack(false);
    });
};

var addUser = function (data, callBack) {
    db.account.insert({username:data.username, password:data.password}, function (error) {
        callBack();
    });
};

var io = require('socket.io')(server,{});

io.sockets.on('connection', function(socket){
    socket.id = Math.random();
    console.log(socket.id);
    SOCKET_LIST[socket.id] = socket;

    socket.on("signIn", function (data) {
        isValidPassword(data, function (result) {
            if(result) {
                Player.onConnect(socket);
                socket.emit("signInResponse", {success: true});
                socket.username = data.username;
            }
            else {
                socket.emit("signInResponse", {success: false});
            }
        });
    });

    socket.on("signUp", function (data) {
        isUsernameTaken(data, function (result) {
            if(result)
                socket.emit("signUpResponse", {success: false});
            else {
                addUser(data, function (result) {
                    socket.emit("signUpResponse", {success: true});
                });
            }
        });
    });

    socket.on("disconnect", function () {
        delete SOCKET_LIST[socket.id];
        Player.onDisconnect(socket);
    });

    socket.on("sendMsgToServer", function (data) {
        var playerName = ("" + socket.username);
        for(var i in SOCKET_LIST) {
            SOCKET_LIST[i].emit("addToChat", playerName + ": " + data);
        }
    });

    socket.on("evalServer", function (data) {
        if(!DEBUG) return;
        var res = eval(data);
        socket.emit("evalAnswer", res);
    });
});

var initPack = {player:[], bullet:[]};
var removePack = {player:[], bullet:[]};
//симуляция initPack в этом файле
// структура классов проекта

initPack = Player.initPack;
initPack = Player.removePack;

var Test = function () {
    initPack.push({
        id: 14,
        x: 5,
        y: 7,
        number: 12
    });
};

setInterval(function () {
    var updatePack = {
        player: Player.update(),
        bullet: Bullet.update()
    };
    
    for (var i in SOCKET_LIST) {
        var socket = SOCKET_LIST[i];
        socket.emit("init", initPack);
        socket.emit("update", updatePack);
        socket.emit("remove", removePack);
    }

    initPack.player = [];
    removePack.player = [];
    initPack.bullet = [];
    removePack.bullet = []

}, 1000/25);