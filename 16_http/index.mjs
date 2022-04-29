import http from "http";
import url from "url";

const port = 3000;

const server = http.createServer((req, res) => {
  //res.write('Erica');
  //res.end('okay');
  const urlInfo = url.parse(req.url, true); //req. url
  const n = urlInfo.query.name; //passando consulta de nome

  res.statusCode == 200;
  res.setHeader("Content-type", "text/html");

  if (!n) {
    res.end(
      "<h1>Preencha seu nome:</h1><form method='GET'><input type='text' name='name'/><input type='submit' value='Enviar'></form>"
    );
  } else {
    res.end(`<h1>Seja bem-vindo ${n}`);
  }
});

server.listen(port, () => {
  console.log(`Server is running in port${port}`);
});
