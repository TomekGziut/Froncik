const http = require('http');
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('frontend/dist/index.html', function(error, data) {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found'); // Send a 404 response
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data); // Send the HTML file as a response
    }
  });
});

server.listen(port, function(error) {
  if (error) {
    console.error('Error starting server:', error);
  } else {
    console.log(`Server running at http://localhost:${port}/`);
  }
});