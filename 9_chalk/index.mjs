//deixa o terminal colorido

import chalk from "chalk";

const num = 10;

if (num >= 10) {
  console.log(chalk.green.bold("Muito bom!"))
} else {
  console.log(chalk.bgRed.italic("Vai estudar! Sua nota foi"))
}

