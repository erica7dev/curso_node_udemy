const path = require('path');

//absoluto
console.log(path.resolve('text.txt'))

//dinamico

const middle = 'Erica'

const filename = 'userIs'

const finalPath = path.join('/', 'arq', middle, filename);

console.log(finalPath);