const fs = require('fs'); //file system - arquivos

fs.readFile('arq.txt', 'utf-8', (err, data) => { //read file
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

