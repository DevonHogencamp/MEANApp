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

var User = require('./models/User');

var auth = require('./controllers/auth');

var message = require('./controllers/message');

var checkAuthenticated = require('./services/checkAuthenticated');

var port = 8080;

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});


app.get('/api/message', message.get);

app.post('/api/message', checkAuthenticated, message.post);

app.post('/auth/register', auth.register);

mongoose.connect('mongodb://localhost:27017/test', function (err, db) {
    if (!err) {
        console.log('Connected to MongoDB');
    }
});

var server = app.listen(port, function () {
    console.log('Server listening on localhost:' + port);
});
