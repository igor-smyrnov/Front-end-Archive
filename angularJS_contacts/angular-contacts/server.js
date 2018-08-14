/**
 * Created by Igor on 7/18/2017.
 */
'use strict';
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/"));

// Server starter

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log('Server started at port: ' + app.get('port')));