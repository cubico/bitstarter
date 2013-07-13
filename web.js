var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(req, res) {
  	res.send(fs.readFileSync('./index.html','utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});