/*2. Temperature Conversion** You have an array of temperatures in Celsius: [0, 10, 20, 30].
Use .map() to create a new array where each temperature is converted to Fahrenheit.
*(Formula: F = C \times 1.8 + 32)* ### 
**Level 2: Data Filtering
*/
let temps = [0, 10, 20, 30];

let fahrenheit = temps.map(c => c * 1.8 + 32);
console.log(fahrenheit);