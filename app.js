//app.js
// Main application file for a simple calculator CLI tool.
// This file imports functions from custom modules and uses them to perform arithmetic operations.
// It also formats and displays the developer's name and registration number using chalk for styling 
// and boxen for a bordered welcome message.

import { add, subtract, multiply, divide } from "./my_module/calculator.js";
import chalk from "chalk";
import readline from "readline";
import path from "path";
import { fileURLToPath } from "url";
import boxen from "boxen";
import { formatName } from "./my_module/textFormatter.js";



// Get current file name using path
const __filename = fileURLToPath(import.meta.url);
const base = path.basename(__filename);
const [, , operation, ...args] = process.argv;
console.log(
  boxen("Welcome to Temitope's Calculator!", {
    padding: 1,
    borderColor: "green",
  })
);
// usage of formatName function
const fullName = formatName("  temitope  ", "  Ibikunle ");
console.log(chalk.yellow(`Developer's Name: ${fullName}`));
// console.log(chalk.yellow(`Current file: ${base}`));

// Printing Registration Number
console.log(chalk.blue("Registration Number: BD/2025/TC3/148"));

const numbers = args.map(Number);

// Perform calculations
function calculate(op, numbers) {
  switch (op) {
    case "add":
      console.log(chalk.red(`The result of your addition is: ${add(numbers)}`));
      break;
    case "subtract":
      console.log(chalk.blue(`The result of your subtraction is: ${subtract(numbers)}`));
      break;
    case "multiply":
      console.log(chalk.green(`The result of your multiplication is: ${multiply(numbers)}`));
      break;
    case "divide":
      try {
        console.log(chalk.magenta(`The result of your division is: ${divide(numbers)}`));
      } catch (err) {
        console.log(chalk.red(`Error: ${err.message}`));
      }
      break;
    default:
      console.log(chalk.yellow("Invalid operation entered."));
  }
}

// CLI
const calculatorOps = ["add", "subtract", "multiply", "divide"];

if (operation && calculatorOps.includes(operation.toLowerCase()) && args.length > 0) {
  const numbers = args.map(Number);
  calculate(operation.toLowerCase(), numbers);
} else {
  // Interactive mode
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter operation (add, subtract, multiply, divide): ", (op) => {
    rl.question("Enter numbers separated by space: ", (inputNums) => {
      const numbers = inputNums.split(" ").map(Number);
      calculate(op.toLowerCase(), numbers);
      rl.close();
    });
  });
}
