import fs from 'fs';

console.log("init")
fs.writeFileSync("arq.txt", 'E ai rapá', 'utf-8', function (err) {
  setTimeout(() => {
    console.log('Arquivo foi!')
  },1000)
})
console.log('The end')