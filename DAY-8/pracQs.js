//    ******Arrays******

// 1. Find the largest and smallest number in an array.

let arr = [20, 30, 40, 50, 10];
let max = arr[0];
let min = arr[0];

for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
    if (arr[i] < min) {
        min = arr[i]
    }
}
console.log("Maximum number = ", max); //50
console.log("Minimum number = ", min); //10

// 2. Remove duplicate elements from an array.

let arr2 = [1, 2, 2, 3, 4, 4, 5];

let unique = [];

for (let num of arr2) {

    if (!unique.includes(num)) {
        unique.push(num);
    }
}
console.log(unique); // [1, 2, 3, 4, 5]

// 3. Sort an array without using built-in sort().

let arr3 = [5, 2, 8, 1, 3];

for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3.length - i - 1; j++) {  //after every swap largest element goes to its correct position at the end of array so we dont need to check it again
        if (arr3[j] > arr3[j + 1]) {
            let temp = arr3[j];
            arr3[j] = arr3[j + 1];
            arr3[j + 1] = temp;
        }
    }
}

console.log(arr3); // [1,2,3,5,8]

// 4. Find second largest number in an array.

let newArray = [10, 5, 12, 34, 50, 11];
let maxNum = newArray[0];
let secMax = newArray[0];

for (i = 1; i < newArray.length; i++) {
    if (newArray[i] > maxNum) {
        secMax = maxNum;
        maxNum = newArray[i];
    } else if (newArray[i] > secMax && newArray[i] != maxNum) {
        secMax = newArray[i];
    }
}
console.log("Second largest number = ", secMax); //34


// 5. Merge two arrays and remove duplicates.

let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];

let mergedArray = [...firstArray, ...secondArray];

let uniqueArray = [];

for (let num of mergedArray) {

    if (!uniqueArray.includes(num)) {
        uniqueArray.push(num);
    }
}

console.log(uniqueArray); //[1,2,3,4,5]

// ****** Objects ******

// 1. Create an object for a student and display all properties dynamically.

let student = {
    name: "Himanshu",
    age: 22,
    city: "Delhi",
    course: "BTech"
}
for (let key in student) {
    console.log(key + ":" + student[key]); // key:value => name:Himanshu age:22 city:Delhi course:BTech
}


// 2. Count number of keys in an object.

let countKey = 0;
for (let keys in student) {
    countKey++;
}
console.log("Number of keys = ", countKey); // Number of keys = 4


// 3. Merge two objects into one.

let obj1 = {
    name: "Himanshu",
    age: 22,
    city: "Delhi"
}
let obj2 = {
    name: "Aaryan",
    age: 26,
    city: "Delhi"
}
let obj3 = {
    subject: "Maths",
    grade: "A"
}

let mergedObj1 = { ...obj1, ...obj3 }; //Spread operator adds properties of obj3 in obj1

let mergedObj = { ...obj1, ...obj2 };  //If two objects have the same keys, then the later object overwrites the earlier one.In this case obj2 keys will overwrite obj1 keys



console.log(mergedObj1)  // {
//  name: 'Himanshu',
//  age: 22,
//  city: 'Delhi',
//  subject: 'Maths',
//  grade: 'A'
//}
console.log(mergedObj); // {name:"Aaryan",age:26,city:"Delhi"}

// 4. Convert an object into an array of keys and values.

let user = {
    name: "Rahul",
    age: 25
};

console.log(Object.keys(user)); //[ 'name', 'age' ]
console.log(Object.values(user)); //[ 'Rahul', 25 ]

// 5. Create a shopping cart object and calculate total bill amount.

let cart = {
    mobile: 20000,
    laptop: 50000,
    mouse: 1000
};
let total = 0;
for (let item in cart) {
    total += cart[item];  //add only values not key
}
console.log("Total Bill =", total);  // Total Bill = 71000


// ****** Loops ******
// 1. Print star pyramid patterns.

let rows = 5;
for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars);
}

// 2. Print multiplication tables from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log("Table of", i);
    for (let j = 1; j <= 10; j++) {
        console.log(i, "x", j, "=", i * j);
    }
    console.log("---------");
}

// 3. Find sum of all even numbers between 1 and 100.

let totalSum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        totalSum += i;
    }
}
console.log(totalSum);  //2550

// 4. Print all prime numbers between 1 and 100.

for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}

// 5. Create a number guessing game using loops.
const prompt = require('prompt-sync')();

let target = Math.floor(Math.random() * 10) + 1; //Generates a random number between 1 and 10
let attempts = 0;

while (attempts < 10) {
    let guess = parseInt(prompt("Guess the number between 1 and 10: ")); //Prompts user to enter a number between 1 and 10
    attempts++; //Increments the number of attempts

    if (guess === target) {
        console.log("Correct! You guessed it in " + attempts + " attempts.");
        break; //Breaks the loop when the guess is correct
    }

    if (attempts === 10) {
        console.log("Game Over! You've used all 10 attempts. ");
    }
}


// ********** Functions **********
// 1. Create a function that returns the greatest of three numbers.

function greatest(a, b, c) {

    if (a >= b && a >= c) {
        return a;
    } 
    else if (b >= a && b >= c) {
        return b;
    } 
    else {
        return c;
    }
}
console.log(greatest(10, 25, 15));

// 2. Write a function to check whether a number is palindrome.


function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;

    while (num > 0) {
        let digit = num % 10;
        reversedNum = reversedNum * 10 + digit;
        num = Math.floor(num / 10);
    }

    return originalNum === reversedNum;
}
console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(123));  // Output: false


// 3. Create a reusable function for currency conversion.

function convertCurrency(amount, rate) {
    return amount * rate;
}
console.log(convertCurrency(100, 83));

// 4. Write a function that accepts an array and returns only even numbers.

function getEvenNumbers(arr) {
    let even = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            even.push(num);
        }
    }
    return even;
}
console.log(getEvenNumbers([1,2,3,4,5,6]));

// 5. Create a calculator using functions for add, subtract, multiply, and divide

function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Invalid Operator";
    }
}
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "/"));


// ****** Scope & Hoisting ******
// 1. Predict output of variable hoisting examples.

// console.log(a1);  // undefined (var is hoisted but not initialized)
// var a1 = 10;

// console.log(b1);  // ReferenceError (let is not hoisted)
// let b1 = 20;

// console.log(c1);  // undefined (const is hoisted but not initialized)
// const c1 = 30;


// 2. Create examples showing block scope using let.

function testScope() {

    if (true) {
        let x = 10;
        const y = 20;
        var z = 30;

        console.log(x);  // 10 (block scope)
        console.log(y);  // 20 (block scope)
        console.log(z);  // 30 (function scope)
    }

    console.log(x);  // Error: x is not defined (let has block scope)
    console.log(y);  // Error: y is not defined (const has block scope)
    console.log(z);  // 30 (accessible outside block)  var has function scope
}

testScope();


// 3. Write a program demonstrating closure behavior.

let totalSummm = 0; // 2
function f() {
    function increment() {
        totalSummm++;
        
        function inner2() {
            totalSummm++;
            console.log(totalSummm);
        }
        return inner2();
    }
    return increment();
}
f();
console.log(totalSummm);


// 4. Create nested functions and access outer variables.

function outerFunction() {

    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log(outerVar);  // Can access outer variable
    }

    return innerFunction;
}

const myFunc = outerFunction();
myFunc();  // Output: I am from outer function


// 5. Debug a program with incorrect variable scoping.

for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
// Output: 4 4 4 (Not 1 2 3)
// Reason: var has function scope, not block scope. 
// By the time setTimeout executes, the loop has already finished 
// and i has become 4.

for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
// Output: 1 2 3
// Reason: let has block scope, so each iteration gets its own i.


 //  **********Callback Functions & setTimeout**********
// 1. Create a delayed greeting message using setTimeout.

setTimeout(() => {
    console.log("Hello Himanshu");
}, 2000);

// 2. Build a countdown timer.
let counter = 5;
let timer = setInterval(() => {
    console.log(counter);
    counter--;
    if (counter === 0) {
        console.log("Time Up");
        clearInterval(timer);
    }
}, 1000);

// 3. Create a callback-based calculator.

function add(a, b) {
    return a + b;
}
 
function subtract(a, b) {
    return a - b;
}
 
function multiply(a, b) {
    return a * b;
}
 
function divide(a, b) {
    return a / b;
}
 
function calculator(a, b, callback) {
    return callback(a, b);
}
 
console.log(calculator(10, 5, add));
console.log(calculator(10, 5, subtract));
console.log(calculator(10, 5, multiply));
console.log(calculator(10, 5, divide));

const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
 
function calculator(operation, ...operands) {
    return operation(...operands);
}
 
console.log(calculator(calc.sum, 1, 2, 3))

// 4. Simulate food ordering system using callbacks.

function orderFood(callback) { //foodReady is a callback function, orderFood accepts a argument as a callback function
    console.log("Order Placed"); //Order Placed is printed first
    setTimeout(() => {
        callback(); //This will execute the callback function after 2 seconds
    }, 2000);  
}

function foodReady() {
    console.log("Food Delivered"); //Food Delivered is printed second
}
orderFood(foodReady);



// 5. Execute functions sequentially using callbacks

function step1(callback) {
    console.log("Step 1 Completed");
    callback();
}
function step2(callback) {
    console.log("Step 2 Completed");
    callback();
}
function step3() {
    console.log("Step 3 Completed");
}
step1(() => { //first callback function
    step2(() => { // second callback function
        step3(); // third callback function
    });
});
//output
// Step 1 Completed
// Step 2 Completed
// Step 3 Completed

// ************ Arrow Functions ************

// 1. Convert normal functions into arrow functions.
//Normal Function:
function add(a, b) {
    return a + b;
}
//Arrow Function:
const add = (a, b) => a + b;
console.log(add(10, 5)); // 15

// 2. Create one-line arrow functions with implicit return.
//Normal Function with return:
function square(num) {
    return num * num;
}
//One-line Arrow Function with implicit return:
const square = num => num * num;
console.log(square(7)); // 49

// 3. Use arrow functions with map().

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 4. Build an even/odd checker using arrow functions.
const checkEvenOdd = num => (num % 2 === 0 ? "Even" : "Odd");
console.log(checkEvenOdd(4)); // "Even"
console.log(checkEvenOdd(7)); // "Odd"

// 5. Create a student grade calculator using arrow functions.

const getGrade = marks => {

    if (marks >= 90) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 50) {
        return "C";
    }
    else {
        return "Fail";
    }
};
console.log(getGrade(78));


//closure :a closure is a function that remembers the environment in which it was created, 
//even after the outer function has finished executing.

//example
function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log(outerVar);  // Can access outer variable
    }

    return innerFunction;
}

const myFunc1 = outerFunction(); //outerFunction has finished executing but innerFunction still remembers the environment in which it was created
myFunc1();  // Output: I am from outer function