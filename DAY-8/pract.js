// Create a program that swaps two numbers without using a third variable.

let a = 5;
let b = 10; 
a=a+b;
b=a-b;
a=a-b;

console.log(a,b);


//array method sort

let c = [7,19,0,8];
let d = c.sort((a,b) => a-b); //sorts the array in ascending order
console.log(d);

let str =["banana","apple","grape","orange"];
let sortedStr = str.sort(); 
console.log(sortedStr);
