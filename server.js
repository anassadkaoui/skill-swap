const http = require('http');

// Create an HTTP server
const server = http.createServer(function(req, res) {
    console.log('Received a request');
    // Neglecting the response part, just logging the request
});

// Make the server listen on port 3000
server.listen(3000, function() {
    console.log('Server is listening on port 3000');
});
