//npx firequiz
//npm init -> package.json file is created.
//tsc --init -> tsconfig.json file is created. -> make three amendments.
//add "type": "module" below  "main": "index.js" in package.json file.
//npm i inquirer -> package-lock.json file and node_modules folder added.
import inquirer from "inquirer"
//npm i --save-dev @types/inquirer to add types -> devDependencies included in package.json
const answer = await inquirer.prompt([
                                      {name: "firstNumber", type: "number", message: "Enter first number"},
                                      {name: "secondNumber", type: "number", message: "Enter second number"},
                                      {name: "Operator", type: "list", message: "Select operator", choices: ["Add", "Subtract", "Multiply", "Divide"]}
                                    ])
//(Optional) Install Prettier extension for code formatting.
//console.log(answer) to see output of above code.
//tsc or tsc index.ts to transpile the code to JavaScript.
//Conditional statements to assign functions to choices elements.
if        (answer.Operator === "Add")             {console.log(answer.firstNumber + answer.secondNumber)}
else if   (answer.Operator === "Subtract")        {console.log(answer.firstNumber - answer.secondNumber)}
else if   (answer.Operator === "Multiply")        {console.log(answer.firstNumber * answer.secondNumber)}
else if   (answer.Operator === "Divide")          {console.log(answer.firstNumber / answer.secondNumber)}
else      (console.log("Enter valid operator"))