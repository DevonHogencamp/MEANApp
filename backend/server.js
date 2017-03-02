var express = require('express');

var app = express();

var port = 8080;

var server = app.listen(port, function () {
    console.log('Server listening on localhost:' + port);
});
