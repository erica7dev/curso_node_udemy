const minimist = require('minimist') //analisa o tipo do argumento

const args = minimist(process.argv.slice(2))
const soma = require('./Soma');

const a = parseInt(args['a']) //passando do cmd p/ int 
const b = parseInt(args['b'])

soma(a, b);