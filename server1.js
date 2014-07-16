var http = require('http');
var port = process.env.PORT || 8080;

var time = new Date();
var creation = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ":" + time.getMilliseconds();
var id =  Math.floor(Math.random() * (1000 - 1));
var server = "server1.js";
var data = { server: server, id: id, created: creation };

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(data));
}).listen(port);

console.log('Server running at port ' + port);