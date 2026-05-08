// 1. Create a program that swaps two numbers without using a third variable.
let a = 5;
let b = 10;

console.log("Before swap: a =", a, ", b =", b);

// Method 1: Using arithmetic
a = a + b; // a = 15
b = a - b; // b = 5  
a = a - b; // a = 10

// Method 2: Using destructuring (ES6) - cleaner
// [a, b] = [b, a];

console.log("After swap: a =", a, ", b =", b);

// -----------------------------------------------------------

// 2. Write a program to check whether a given value is a number, string, boolean, null, or undefined.
function checkDataType(value) {
    if (value === null) {
        return "null";
    }
    if (typeof value === "undefined") {
        return "undefined";
    }
    return typeof value; // returns "number", "string", "boolean", etc.
}

// Test cases
console.log(checkDataType(42));        // number
console.log(checkDataType("hello"));   // string
console.log(checkDataType(true));      // boolean
console.log(checkDataType(null));      // null
console.log(checkDataType(undefined)); // undefined

//---------------------------------------------------------

// 3. Convert temperature from Celsius to Fahrenheit using variables.
let celsius = 25; // change this value to test
let fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius}°C = ${fahrenheit}°F`);

//-----------------------------------------------------------

// 4. Create a simple calculator using variables and arithmetic operators.
let num1 = 20;
let num2 = 4;
let operator = "+"; // try "+", "-", "*", "/", "%"

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
} else if (operator === "%") {
    result = num1 % num2;
} else {
    result = "Invalid operator";
}

console.log(`${num1} ${operator} ${num2} = ${result}`);

//------------------------------------------------------

// 5. Write a program that takes a user's birth year and calculates age.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter your birth year: ", birthYear => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(birthYear);
  console.log(`You are ${age} years old.`);
  readline.close();
});
