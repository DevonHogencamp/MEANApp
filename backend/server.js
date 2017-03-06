/*
    Devon Hogencamp
    2-3-17
    server.js

    Made a express server the uses port 8080 and has a route handler to POSt /api/message

    2-3-17: Added body parser to handle our req/res

    2-3-17: Take care of CORES errors

    3-6-17: Mongodb
*/
var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongo = require('mongoose');

var port = 8080;

var database;

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

app.post('/api/message', function (req, res) {
    console.log(req.body);
    database.collection('msgs').insertOne(req.body);
    res.status(200);
});

mongo.connect('mongodb://localhost:27017/test', function (err, db) {
    if (!err) {
        console.log('Connected to MongoDB');

        database = db;
    }
});

var server = app.listen(port, function () {
    console.log('Server listening on localhost:' + port);
});
