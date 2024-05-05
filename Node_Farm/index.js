const { log } = require('console');
const http = require('http');
const url = require('url');
const fs = require('fs');
const PORT = 8000;

const data = fs.readFileSync('./dev-data/data.json', 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  switch (pathName) {
    case '/favicon.ico':
      res.end();
      break;

    case '/api':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
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
