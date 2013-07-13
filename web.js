var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(req, res) {
  fs.readFile(__dirname + '/index.html', 'utf8', function (err, data) {
  	if (err) console.log(err);
  	res.set('Content-Type', 'text/html');
    res.send(new Buffer(data));
   });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});