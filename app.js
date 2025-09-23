// Importing required functions and modules
import { add, subtract, multiply, divide } from "./my_module/calculator.js"; 
// Import math functions from a custom module (calculator.js)

import chalk from "chalk"; 
// Chalk is used to style terminal string outputs with colors

import readline from "readline"; 
// Readline is used for interactive input/output in the terminal

import path from "path"; 
// Path is used to work with file and directory paths

import { fileURLToPath } from "url"; 
// Converts file URLs into file paths (useful for ES modules)

import boxen from "boxen"; 
// Boxen creates boxes around text in the terminal (for decoration)

import { formatName } from "./my_module/textFormatter.js"; 
// Import a custom utility function to format names


// ---------------------- FILE INFORMATION ----------------------

// Get current file name using path and URL conversion
const __filename = fileURLToPath(import.meta.url);  
const base = path.basename(__filename);  // Extracts only the file name from the path

// Extract CLI arguments: node app.js <operation> <numbers...>
const [, , operation, ...args] = process.argv;  

// Print a decorated welcome message using boxen
console.log(
  boxen("Welcome to Temitope's Calculator!", {
    padding: 1,        // Space inside the box
    borderColor: "green", // Green border
  })
);


// ---------------------- DISPLAY DEVELOPER INFO ----------------------

// Use formatName function to clean and properly capitalize the developer’s name
const fullName = formatName("  temitope  ", "  Ibikunle ");
console.log(chalk.yellow(`Developer's Name: ${fullName}`));  // Styled with yellow

// Print registration number in blue text
console.log(chalk.blue("Registration Number: BD/2025/TC3/148"));


// ---------------------- PREPARE NUMBERS ----------------------

// Convert string arguments into numbers (from CLI input)
const numbers = args.map(Number);


// ---------------------- CALCULATOR FUNCTION ----------------------

/**
 * Perform calculation based on operation type
 * @param {string} op - The operation to perform (add, subtract, multiply, divide)
 * @param {number[]} numbers - Array of numbers provided by user
 */
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
        // Division can throw errors (like divide by zero), so wrapped in try-catch
        console.log(chalk.magenta(`The result of your division is: ${divide(numbers)}`));
      } catch (err) {
        console.log(chalk.red(`Error: ${err.message}`));
      }
      break;

    default:
      console.log(chalk.yellow("Invalid operation entered."));
  }
}


// ---------------------- CLI HANDLING ----------------------

// List of valid calculator operations
const calculatorOps = ["add", "subtract", "multiply", "divide"];

// CASE 1: User provides operation & numbers via CLI (e.g. `node app.js add 3 5`)
if (operation && calculatorOps.includes(operation.toLowerCase()) && args.length > 0) {
  const numbers = args.map(Number);  // Convert input strings to numbers
  calculate(operation.toLowerCase(), numbers); // Perform calculation

} else {
  // CASE 2: Interactive mode (user enters operation and numbers manually)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // First ask the user for the operation
  rl.question("Enter operation (add, subtract, multiply, divide): ", (op) => {
    // Then ask the user for numbers
    rl.question("Enter numbers separated by space: ", (inputNums) => {
      const numbers = inputNums.split(" ").map(Number);  // Convert input string to numbers
      calculate(op.toLowerCase(), numbers); // Perform calculation
      rl.close(); // Close readline interface after execution
    });
  });
}
