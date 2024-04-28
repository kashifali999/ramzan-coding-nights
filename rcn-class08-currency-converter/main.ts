// //We can save data as object and call complete object at once
// let stdData1 = {name1:"Kashif", roll:"1234", class:"piaic"}
// console.log(stdData1)

// //We can save data as object and call single property of object (dot method)
// let stdData2 = {name2:"Kashif", roll:"1234", class:"piaic"}
// console.log(stdData2.name2)

// //We can save data as object and call single property of object (array method)
// let stdData3:any = {name3:"Kashif", roll:"1234", class:"piaic"}
// console.log(stdData3['class'])

// let property:any = "name3"
// console.log(stdData3[property])
//------------------------------------------------------------------------------------
import inquirer from "inquirer"
const currency:any =    {USD:1, //Base currency
                        EUR:0.91,
                        GBP:0.76,
                        INR:74.57,
                        PKR:280}


let user_answers = await inquirer.prompt([
    {name:"from",
    type:"list",
    message:"Enter from currency",
    choices:["USD", "EUR", "GBP", "INR", "PKR"]},

    {name:"to",
    type:"list",
    message:"Enter to currency",
    choices:["USD", "EUR", "GBP", "INR", "PKR"]},

    {name:"amount",
    type:"number",
    message:"Enter your amount"}
])

let fromAmount = currency[user_answers.from] //exchange rate
let toAmount = currency[user_answers.to] //exchange rate
let amount = user_answers.amount
// First, we shall have to convert to base currency and then to multiply
let baseAmount = amount / fromAmount //convert from amount to base currency
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount)

// console.log(fromAmount)
// console.log(toAmount)
// console.log(amount)
// console.log(baseAmount)