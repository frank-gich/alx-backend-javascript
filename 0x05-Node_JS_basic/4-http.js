const http = require('http');

const HOST_NAME = '127.0.0.1'
const PORT = 1245

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello Holberton School!')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${HOST_NAME}:${PORT}/`)
})

module.exports = app;
