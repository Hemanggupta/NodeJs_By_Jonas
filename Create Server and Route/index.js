const { log } = require('console');
const http = require('http');
const url = require('url');
const PORT = 8000;

const server = http.createServer((req, res) => {
  const pathName = req.url;
  switch (pathName) {
    case '/favicon.ico':
      res.end();
      break;
    case '/':
      res.end('<h1>HOME page</h1>');
      break;
    case '/overview':
      res.end('<h1>OVERVIEW page</h1>');
      break;
    case '/about':
      res.end('<h1>ABOUT page</h1>');
      break;
    default:
      res.writeHead(404, {
        'Content-Type': 'text/html'
      });
      res.end('<h1>Page Not Found</h1>');
      break;
  }
});

server.listen(PORT, '127.0.0.1', () => {
  log('Listening on port : ' + PORT);
});
