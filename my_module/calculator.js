
// calculator.js - A simple custom module for basic arithmetic operations.
// This module exports four functions: add, subtract, multiply, and divide.
// Each function takes an array of numbers as input and performs the respective operation.
function add(numbers){
    return numbers.reduce((a,b)=> a+b,0);
}
function subtract(numbers){
    return numbers.reduce((a,b)=> a-b)
}
function multiply(numbers){
    return numbers.reduce((a,b)=> a*b,1)
}
function divide(numbers){
    return numbers.reduce((a,b)=> {
        if(b===0) throw new Error('Dividing by zero is not allowed')
        return a / b;
    })
}

export {add,subtract,multiply,divide};
