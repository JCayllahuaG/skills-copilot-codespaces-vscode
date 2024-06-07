// Create web server
// Run node comments.js
// Open browser and go to http://localhost:3000/comments

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/comments.html').pipe(res);
}).listen(3000, ' localhost');
