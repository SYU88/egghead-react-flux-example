var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/dist'));

var PORT = 8000;
var server = app.listen(PORT);

console.log("Flux server listening on port ", PORT);
