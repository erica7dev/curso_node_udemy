const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3009;

const server = http.createServer((req, res) => {
  var urlInfo = require("url").parse(req.url, true);//converte url em req
  const name = urlInfo.query.name;//o que vai ser passado na query

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (!name) { //se não tiver query ele pega os dados enviados
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    fs.writeFile("arquivo.txt", name, function (err, data) { // atualiza passando dados enviados p/ arquivo txt
      res.writeHead(302, {
        Location: "/",
      });
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});