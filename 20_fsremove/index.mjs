import fs from 'fs'

fs.unlink('arq.txt', function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log('deleted');
})