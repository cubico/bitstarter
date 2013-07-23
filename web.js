var express = require('express');
var fs = require('fs');
var app = express.createServer();

app.configure(function(a,b){
  express.logger()
  app.use('/',express.static(__dirname + '/'));
});

/*app.get('/', function(req, res) {
  	res.send(fs.readFileSync('./index.html','utf8'));
});*/

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});