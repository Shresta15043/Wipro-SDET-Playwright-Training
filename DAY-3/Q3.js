/* ### **Level 2: Data Filtering**
**3. Finding Adults**
Given an array of objects:
const users = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 }];
Use .filter() to create a new array containing only the users who are 18 or older.
*/
const users = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 }];
const adults = users.filter(user => user.age >= 18);
console.log(adults);  
