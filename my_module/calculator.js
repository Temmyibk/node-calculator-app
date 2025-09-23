// calculator.js - A simple math module
// This module provides basic arithmetic functions: add, subtract, multiply, and divide.
// Each function accepts an array of numbers and applies the chosen operation across all values.


// ---------------------- ADDITION ----------------------
/*
 * Adds all numbers in an array.
 * Example: add([2, 3, 4]) → 9
 *
 * @param {number[]} numbers - Array of numbers to be summed
 * @returns {number} The total sum of the numbers
 */
function add(numbers) {
    // .reduce() starts with 0 and adds each number one by one
    return numbers.reduce((a, b) => a + b, 0);
}


// ---------------------- SUBTRACTION ----------------------
/*
 * Subtracts numbers in an array from left to right.
 * Example: subtract([10, 3, 2]) → 10 - 3 - 2 = 5
 *
 * @param {number[]} numbers - Array of numbers to be subtracted
 * @returns {number} The result of sequential subtraction
 */
function subtract(numbers) {
    // .reduce() starts with the first number and subtracts each subsequent one
    return numbers.reduce((a, b) => a - b);
}


// ---------------------- MULTIPLICATION ----------------------
/*
 * Multiplies all numbers in an array.
 * Example: multiply([2, 3, 4]) → 24
 *
 * @param {number[]} numbers - Array of numbers to be multiplied
 * @returns {number} The product of all numbers
 */
function multiply(numbers) {
    // .reduce() starts with 1 and multiplies each number one by one
    return numbers.reduce((a, b) => a * b, 1);
}


// ---------------------- DIVISION ----------------------
/**
 * Divides numbers in an array from left to right.
 * Example: divide([100, 5, 2]) → 100 ÷ 5 ÷ 2 = 10
 *
 * Includes error handling for division by zero.
 *
 * @param {number[]} numbers - Array of numbers to be divided
 * @returns {number} The result of sequential division
 * @throws {Error} If division by zero is attempted
 */
function divide(numbers) {
    // .reduce() starts with the first number and divides by each subsequent one
    return numbers.reduce((a, b) => {
        if (b === 0) throw new Error("Dividing by zero is not allowed");
        return a / b;
    });
}


// ---------------------- EXPORTS ----------------------
// Export all functions so they can be imported and used in other files
export { add, subtract, multiply, divide };
