//le dados colocados na linha de comando
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

//faz perguntas na linha de comando
readline.question('Qual sua linguagem favorita?', (language) => {
  if (language === "JavaScript") {
    console.log("Aí sim, hein!!!")
  }
  
  console.log(`Minha linguagem favorita é: ${language}`)
  readline.close()
})