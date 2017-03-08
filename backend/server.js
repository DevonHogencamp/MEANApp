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

var mongoose = require('mongoose');

var port = 8080;

var database;

var Message = mongoose.model({
    msg: String
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

app.post('/api/message', function (req, res) {
    console.log(req.body);
    // database.collection('msgs').insertOne(req.body);
    var msg = new Message(req.body);

    msg.save();

    res.status(200);
});

var mongoDB = 'mongodb://localhost:27017/test';
mongoose.connect(mongoDB);

var database = mongoose.connection;

// mongo.connect('mongodb://localhost:27017/test', function (err, db) {
//     if (!err) {
//         console.log('Connected to MongoDB');
//
//         database = db;
//     }
// });

var server = app.listen(port, function () {
    console.log('Server listening on localhost:' + port);
});
