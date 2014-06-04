var http = require('http');
var server = http.createServer(function(request, response) {
  response.writeHead(200);
  console.log("starting");
  
  setTimeout(function() {
  console.log("timeout");
  response.end(); 
  }, 5000)

});
server.listen(8080);
console.log("Listening on port 8080...");
