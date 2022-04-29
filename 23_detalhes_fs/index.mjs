import fs from 'fs';

const arq = 'teste.html';

fs.stat(arq, (err,stats) => {
  if (err) {
    console.log(err)
  }
  console.log(stats.isFile());
  console.log(stats);
  console.log(stats.isDirectory())
  console.log(stats.isSymbolicLink())
})
