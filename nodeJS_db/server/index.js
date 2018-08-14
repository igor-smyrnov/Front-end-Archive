"use strict";

// TODO: POOL
// TODO: 

var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var db = 'angular';

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: db
});
var app = express();
var jsonParser = bodyParser.json();

app.get('/getPosts', function (request, response) {
    console.log("--GET--");
    
    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected");
        } else {
            console.log("Error connecting database");
        }
    });

    connection.query('SELECT * from posts', function(err, rows) {
        if (!err) {
            console.log('Rows sent');
            response.send(rows);
        }
        else
            console.log('Error while performing Query.');
    });
});

//INSERT INTO `angular`.`posts` (`post_id`, `title`, `content`, `author`) VALUES (NULL, 'hello', 'jjj', 'rrr');
app.post('/addPost', jsonParser, function (request, response) {
    console.log("--POST--");
    
    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected");
        } else {
            console.log("Error connecting database");
        }
    });
    var title = request.body.title;
    var content = request.body.content;
    var author = request.body.author;

    var query = connection.query(`INSERT INTO ${db}.posts`+
        "(post_id, title, content, author) " +
        `VALUES (NULL, '${title}', '${content}', '${author}');`, function(err) {
        if (!err) {
            console.log('Rows sent');
        }
        else {
            console.log('Error while performing Query.');
            console.log(err);
        }
    });
    console.log(query.sql);
});

//DELETE FROM `angular`.`posts` WHERE `posts`.`post_id` = 18
app.delete('/removePost/:id', function (request, response) {
    console.log("--DELETE--");
    
    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected");
        } else {
            console.log("Error connecting database");
        }
    });

    var query = connection.query(`DELETE FROM ${db}.posts `+
        `WHERE post_id = ${request.params.id}`, function(err) {
        if (!err) {
            console.log('Rows sent');
        }
        else {
            console.log('Error while performing Query.');
            console.log(err);
        }
    });
    console.log(query.sql);
});

//UPDATE `angular`.`posts` SET `content` = 'TestData conten', `title` = 'ttt' WHERE `posts`.`post_id` = 8
app.put('/updatePost', jsonParser, function (request, response) {
    console.log("--UPDATE--");

    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected");
        } else {
            console.log("Error connecting database");
        }
    });

    var query = connection.query(`UPDATE ${db}.posts `+
        `SET title = '${request.body.title}', content = '${request.body.content}', author = '${request.body.author}' `+
        `WHERE post_id = ${request.body.post_id}`,
        function(err) {
            if (!err) {
                console.log('Rows sent');
            }
            else {
                console.log('Error while performing Query.');
                console.log(err);
            }
    });
    console.log(query.sql);
});

app.use(express.static(__dirname + "../../"));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('App started at localhost:' + app.get('port'));
});