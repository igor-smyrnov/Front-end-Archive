"use strict";

const express = require('express');
const app = express();
const server = require('http').Server(app);

app.get('/',function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
app.use('/assets',express.static(__dirname + '/assets'));
app.use('/bower_components',express.static(__dirname + '/bower_components'));

let listener = server.listen(3001, function(){
    console.log('Listening on port ' + listener.address().port);
});