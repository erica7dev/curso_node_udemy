const fs = require('fs');

const antigo = 'arquivao.txt'
const deNovo = 'arquivinho.txt';

fs.rename(antigo, deNovo, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`O arquivo agora se chama${deNovo}`)
})