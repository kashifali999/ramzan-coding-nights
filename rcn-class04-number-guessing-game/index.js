#! /usr/bin/env node
//Step 01 : Create index.ts file and transpile JS file by tsc index.ts
//Step 02 : npm init -> package.json file is created - add "type": "module"
//Step 03 : tsc --init -> tsconfig.json file is created - make three amendments.
//Step 04 : npm i inquirer -> node_modules folder and package-lock.json file is created then install types.
//Step 05 : Till now, code is working pretty nice for fixed value random number e.i. const randomNumber = 13
//Step 06 : Use Math.random() instead of value but it creates fraction of numbers.
/*Step 07 : We used "Math.floor(Math.random())" or "Math.ceil(Math.random())" to get intiger as output but
            now we always get 0 as output is by default between 0 and 1.*/
//Step 08 : To sort this problem multiply the result with 10 as Math.floor(Math.random() * 10)
//Step 09 : If we don't want 0 as result, we can add 1 as Math.floor(Math.random() * 10 + 1)
//Step 10 : Add Shebang #! /usr/bin/env node
//Step 11 : Add "publishConfig": {"access": "public"} in package.json file below "type": "module"
//Step 12 : Add "bin": "index.js"  in package.json file below "publishConfig": {"access": "public"}
//Step 13 : npm login -> loges in npm in brouser.-> intimates in cmd.
//Step 14 : npm i -g
import inquirer from "inquirer";
//const randomNumber = 13
const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber)
const answer = await inquirer.prompt([
    { name: "guessNumber", type: "number", message: "Guess a number" }
]);
if (answer.guessNumber === randomNumber) {
    console.log("Your answer is correct");
}
else {
    console.log("Your answer is wrong");
}
