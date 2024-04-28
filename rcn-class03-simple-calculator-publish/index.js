#! /usr/bin/env node
//npx firequiz
//npm init -> package.json file is created.
//tsc --init -> tsconfig.json file is created. -> make three amendments.
//add "type": "module" below  "main": "index.js" in package.json file.
//npm i inquirer -> package-lock.json file and node_modules folder added.
import inquirer from "inquirer";
//npm i --save-dev @types/inquirer to add types -> devDependencies included in package.json
const answer = await inquirer.prompt([
    { name: "firstNumber", type: "number", message: "Enter first number" },
    { name: "secondNumber", type: "number", message: "Enter second number" },
    { name: "Operator", type: "list", message: "Select operator", choices: ["Add", "Subtract", "Multiply", "Divide"] }
]);
//(Optional) Install Prettier extension for code formatting.
//console.log(answer) to see output of above code.
//tsc or tsc index.ts to transpile the code to JavaScript.
//Conditional statements to assign functions to choices elements.
if (answer.Operator === "Add") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.Operator === "Subtract") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.Operator === "Multiply") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.Operator === "Divide") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else
    (console.log("Enter valid operator"));
//--------------------------------------------------------------------------------------------------------
//Above dotted line is old 2nd class e.i. simple calculator, now we shall make it executable.
//Add "#! usr/bin/env node" on the first line of code. It's called SHEBANG.
//Add "bin": "index.js" below  "type": "module" in package.json file.
//Signup and login to npmjs.com - type npm login in terminal and login.
//Check package name availability - choose a unique name and edit in package.json file
//Add, commit and push code to GitHub.
//login to npm from terminal by "npm login" and publish by "npm publish"
//In case, package is to be edited and published again, make sure its version is changed  in package.json file.
//npm i -g to install the package globally
//run "npx rcn-class03-simple-calculator-publish"
//---------------------------------------------------------------------------------------------------------
//Make new repository and try all CLI commands
//Install GitHub desktop and use it
//Install and learn Amazon CodeWhisperer (free) as an alternate of GitHub copilot (paid) at own
//Project submission form
