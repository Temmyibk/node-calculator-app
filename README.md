 # Node-Calculator-App  

This is a simple calculator project, built with **Node.js**.  
It performs basic arithmetic operations and demonstrates the use of **custom modules**, **built-in modules**, and **third-party packages**.  

---

## Features  

Perform basic arithmetic operations:  
- ➕ **Addition**  
- ➖ **Subtraction**  
- ✖️ **Multiplication**  
- ➗ **Division**  

Other features:  
-  Command-line interface (CLI) usage  
-  Modularized code structure for reusability  
-  Easy to extend with new operations  

---

##  Project Structure  

```bash
node-calculator-app/
│── app.js             # Main entry point  
│── package.json       # Project metadata & dependencies  
│── my_module/  
│   ├── calculator.js      # Arithmetic operations  
│   └── textFormatter.js   # Formats text input (e.g. names)  
│── .gitignore         # Ignored files for Git  
│── README.md          # Project documentation  


⚡ Installation & Usage

1. Navigate to your project folder:
    cd node-calculator-app
2. Install dependencies:
    npm install/i
3. Run with command-line arguments:
    node app.js add 5 10 15
    node app.js subtract 50 25
    node app.js multiply 6 7
    node app.js divide 100 5
4.  Or use interactive mode:
    node app.js

## Tech Stack
  Node.js (JavaScript runtime)
  Chalk (for colourful console output)
  Boxen (for styled CLI messages)
  Readline (for interactive CLI input)

Developer: Temitope Ibikunle
Registration Number: BD/2025/TC3/148

