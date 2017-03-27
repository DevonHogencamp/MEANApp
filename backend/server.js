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

var auth = require('./controllers/auth');

var message = require('./controllers/message');

var checkAuthenticated = require('./services/checkAuthenticated');

var cores = require('./services/cores');

var port = 8080;

app.use(bodyParser.json());

app.use(cores);

app.get('/api/message', message.get);

app.post('/api/message', checkAuthenticated, message.post);

app.post('/auth/register', auth.register);

app.post('/auth/login', auth.login);

mongoose.connect('mongodb://localhost:27017/test', function (err, db) {
    if (!err) {
        console.log('Connected to MongoDB');
    }
});

var server = app.listen(port, function () {
    console.log('Server listening on localhost:' + port);
});
