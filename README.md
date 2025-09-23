# node-calculator-app
A command-line calculator built with Node.js.
This project demonstrates modular programming in Node.js, clean code organization, and beginner-friendly practices.

Features

Perform basic arithmetic operations:

➕ Addition

➖ Subtraction

✖️ Multiplication

➗ Division

Command-line interface (CLI) usage

Modularized code structure for reusability

Easy to extend with new operations

Project Structure

node-calculator-app/
│
├── app.js              # Main entry point
├── package.json        # Project configuration
│
└── my_module/          # Custom modules
    ├── calculator.js   # Arithmetic logic
    └── textFormatter.js# Helper for text formatting

    Usage

Run the calculator from the command line:
    node app.js <operation> <num1> <num2>

    Example
    node app.js add 5 3
# Output: 8

node app.js subtract 10 4
# Output: 6

node app.js multiply 7 6
# Output: 42

node app.js divide 20 4
# Output: 5

How It Works

app.js takes user input from the command line.

Operations are handled by my_module/calculator.js.

Results are displayed in a user-friendly format with textFormatter.js.

Technologies Used

Node.js
 – Runtime environment

JavaScript (ES6 Modules)

Author

👩‍💻 Temitope Ibikunle

GitHub

LinkedIn

