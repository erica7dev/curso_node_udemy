import http from 'http';
import fs from 'fs';

const port = 3030;

const server = http.createServer((req,res) => {
  fs.readFile('msg.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  });
});

server.listen(port, () => {
  console.log('Rodando')
})
