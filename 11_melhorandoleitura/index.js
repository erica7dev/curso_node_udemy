//resgta e lida com o input do user
//usar promises

const inquirer = require("inquirer");

inquirer.prompt([ //obj como pgt
  {
    name: 'p1',
    message: 'Qual vosso nome?'
  },
  {
    name: 'p2',
    message: 'Qual vosso nome?'
  }
]).then((answers) => {
  console.log(answers)
  const algumaCOisa =(parseInt(answers.p1)+parseInt(answers.p2) / 2) //converto pgts em int e calc média

  console.log(`A média é ${algumaCOisa}`);
}).catch(err=>console.log(err))