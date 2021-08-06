const http = require('http');
const fs = require('fs');
const {EOL} = require('os');



const hostname = '192.168.1.100';
const port = 80;

const server = http.createServer((req, res) => {
  
  let now = new Date().toString()
  let ip = req.socket.remoteAddress;

  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  fs.appendFile('ip.txt', `${now}, ${ip}${EOL}`, () => {});

  res.end(`茶茶，你的ip是： ${ip}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});