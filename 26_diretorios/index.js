const fs = require('fs');

if (!fs.existsSync('./mypast')) {
  console.log('non ecxiste')
}

fs.mkdirSync('mypast')//create directory

if (fs.existsSync('./mypast')){
  console.log('Existe fio!')
}
