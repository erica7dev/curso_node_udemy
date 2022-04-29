const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let q = url.parse(req.url, true)
  let filename = q.pathname.substring(1)

  if (filename.includes('html')) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, (err, data) => {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        return res.end()
      })
    } else {
      fs.readFile('404.html', function (err, data) {
        res.writeHead(404, {'Content-Type':'text/html'})
        res.write(data)
        return res.end()
      })
    }
  }
})

server.listen(8089, () => {
  console.log(`Server is running!`)
})