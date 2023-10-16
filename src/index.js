import http from 'http';

http
  .createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello world');
    response.end('Bye World');
  })
  .listen(4000, function () {
    console.log('Server is running on port 4000');
  });
