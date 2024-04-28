//01 - tsc --init -> tsconfig.json file is created -> make three amendments
//02 - Make main.ts file & transpile it "tsc main.ts" -> JS file is created
//03 - npm init -y -> package.json file is created (-y is optional, means yes to all questions)
//04 - Add "type": "module" in package.json file
//05 - Install inquirer "npm i inquirer" and its types -> node_modules folder and package-lock.json file are created.
//06 - 
//07 - 
//08 - 
//09 - 
//10 - 
import inquirer from "inquirer";
let myBalance = 10000;
let myPIN = 1234;
let ansPIN = await inquirer.prompt({ name: "askPIN", type: "number", message: "Enter PIN" });
//console.log(ansPIN.askPIN)
//------------------------------------------------------------------------------------------------------------
if (ansPIN.askPIN === myPIN) {
    console.log("Correct PIN");
    let options = await inquirer.prompt({ name: "operation",
        type: "list",
        message: "Select Option",
        choices: ["Cash Withdrawl", "Fast Cash", "Balance Inquiry"] });
    //If cash withdrawl option is selected
    if (options.operation === "Cash Withdrawl") {
        let enterAmount = await inquirer.prompt({ name: "amount", type: "number", message: "Enter Amount" });
        //If fast cash option is selected     
        if (options.operation === "Fast Cash") {
            let enterpsAmount = await inquirer.prompt({ name: "psamount", type: "list", message: "Enter Amount", choices: ["2000", "4000", "6000", "8000", "10000"] });
            if (options.psamount === 1000) {
                console.log("your payment is sucsess fully");
            }
            //If entered amount axceedes available balance
            myBalance -= enterpsAmount.amount;
            if (myBalance >= 0) {
                console.log(`Your remaining balance is ${myBalance}`);
            }
            else {
                console.log("Your transuction can't be processed, please enter valid amount");
            }
        }
        //If Balance Inquiry option is selected
        else
            (options.operation === "Balance Inquiry");
        {
            console.log(`Your balance is ${myBalance}`);
        }
    }
}
//------------------------------------------------------------------------------------------------------------
else
    (console.log("Incorrect PIN"));
