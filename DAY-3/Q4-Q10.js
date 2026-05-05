// Array Methods
/*4. String Lengths** Write a function that takes an array of strings and uses .filter() to return only the strings that have more than 5 characters.*/
function filterLongStrings(arr) {
  return arr.filter(str => str.length > 5);
}
console.log(filterLongStrings(['apple', 'banana', 'kiwi', 'orange']));


/*5.Total Cost** Given an array of prices [19.99, 5.50, 3.99, 25.00], use .reduce() to calculate the total sum of the items.*/
const prices = [19.99, 5.50, 3.99, 25.00];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);


/*6. Counting Occurrences** Use .reduce() to count how many times the word "apple" appears in this array: ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'].*/
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
const count = fruits.reduce((acc, item) => {
  if (item === 'apple') {
    acc++;
  }
  return acc;
}, 0);

console.log(count); 

/*7. Array Transformation** Given an array of numbers [1, 2, 3, 4, 5, 6], use a combination of .filter() and .map() to: 1. Keep only the even numbers. 2. Square those even numbers (e.g., 2 becomes 4, 4 becomes 16).*/
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num);
console.log(result); 


/*8. Object Extraction** You have an array of "Product" objects: [{ id: 1, title: 'Laptop' }, { id: 2, title: 'Mouse' }] Use .map() to extract just the titles into a simple array of strings: ['Laptop', 'Mouse'].*/
const products = [
  { id: 1, title: 'Laptop' },
  { id: 2, title: 'Mouse' }
];
const titles = products.map(product => product.title);
console.log(titles); 

/*9. The Average** Write a short script using .reduce() to find the average score from an array of test results: [80, 90, 70, 100].*/
const scores = [80, 90, 70, 100];
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(average);


/*10. Flattening (The Bonus)** Without using the built-in .flat() method, use .reduce() to turn this nested array into a single flat array: [[1, 2], [3, 4], [5, 6]] → [1, 2, 3, 4, 5, 6]*/
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); 