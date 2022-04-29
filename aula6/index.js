//nome=Erica

console.log(process.argv) //le argumentos
const args = process.argv.slice(2) //fatia
console.log(args);
const nome = args[0].split('=')[1] //adiciona = ao array
console.log(nome);