#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "sentence", type: "input", message: "Enter sentence" }
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`Your total words are ${words.length}`);
