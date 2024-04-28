// // //Array---------------------------------------------------------------------------
// // let fruitchat = ["Banana", "Apple", "Melon", "Strawbary", "Mango"]
// // console.log(fruitchat)
// // //Array->.push()->adds element at the end of array
// // fruitchat.push("Water Melon")
// // console.log(fruitchat)
// // //Array->.pop()->removes last element of the array
// // fruitchat.pop()
// // console.log(fruitchat)
// // //Array->.concat()->adds multiple elements at the end of array
// // fruitchat = fruitchat.concat(["Nuts", "Khopra"])
// // console.log(fruitchat)
// // //Loops---------------------------------------------------------------------------
// // let ramzanDays = 0
// // while (ramzanDays <= 30){
// //     console.log("Fasting")
// //     //console.log("Prayers")
// //     ramzanDays++
// // }
// //TODO-------------------------------------------------------------------------------
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        { name: "todo", type: "input", message: "What do you want to add" },
        { name: "addMore", type: "confirm", message: "Do you want to add more", default: "false" }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
//Code of fast cash of previous class "CLI based ATM"
