/*
    Devon Hogencamp
    2-3-17
    server.js

    Made a express server the uses port 8080 and has a route handler to POSt /api/message

    2-3-17: Added body parser to handle our req/res

    2-3-17: Take care of CORES errors
*/
var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var port = 8080;

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access_Control-Allow_Origin", "*");
    res.header("Access_Control-Allow_Headers", "Content-Type,Authorization");
    next();
});

app.post('/api/message', function (req, res) {
    console.log(req.body);
    res.status(200);
});

var server = app.listen(port, function () {
    console.log('Server listening on localhost:' + port);
});
