import inquirer from "inquirer";
import chalk from "chalk";

inquirer
  .prompt([
    { name: "nome", message: "Qual o seu nome?" },
    { name: "idade", message: "Qual a sua idade?" },
  ])
  .then((answers) => {
    if (answers.nome === "" || answers.idade === "") {
      throw new Error("Insira todos os dados para prosseguir:");
    }
    console.log(chalk.bgMagenta.black.bold(answers.nome));
    console.log(chalk.bgGray.black.bold(answers.idade));
  })
  .catch((err) => {
    console.log(err);
  });
