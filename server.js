var express = require('express');
var app = express();

var port = 8090;

app.use(express.static(__dirname + '/public'));

app.listen(port);
