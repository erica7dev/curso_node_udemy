const minimist = require('minimist') //analisa o tipo do argumento

const args = minimist(process.argv.slice(2))

console.log(args);

const nome = args['Bebida']
const profissao = args['Faxina']

console.log(nome, profissao)

//node index --nome=Erica --profissao=Programadora