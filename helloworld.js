const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch (path) {
    case '':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('HomePage');
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('About');
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      break;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!'); 
});

server.listen(port, () => console.log(`Server running on port ${port}`+ `press Ctrl+C to stop`));