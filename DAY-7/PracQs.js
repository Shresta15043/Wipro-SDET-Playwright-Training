// ******Strings******

//1. Reverse a String without using reverse() method

let str = "Hello";
let revStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}
console.log(revStr);

//2. Count Vowels in a String

let str1 = "Himanshu";
let count = 0;
for (let i = 0; i < str1.length; i++) {
  if (
    str1[i] == "a" ||
    str1[i] == "e" ||
    str1[i] == "i" ||
    str1[i] == "o" ||
    str1[i] == "u"
  ) {
    count++;
  }
}
console.log(count);

//3. Check Palindrome

let str2 = "Himanshu";
let revStr2 = "";
for (let i = str2.length; i >= 0; i--) {
  revStr2 += str2[i];
}
if (str2 == revStr2) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
}

//4. Capitalize First Letter of Every Word

let sentence = "Himanshu is a good boy";
let words = sentence.split(" "); // ["Himanshu","is","a","good","boy"]
let result = "";

for (let i = 0; i < words.length; i++) {
  result += words[i][0].toUpperCase() + words[i].slice(1) + " "; // Himanshu + is + a + good + boy
}
console.log(result.trim()); //Himanshu Is A Good Boy

//5. Find Longest Word in Sentence

let s1 = "Himanshu is a good boy";
let brokenWords = s1.split(" "); // ["Himanshu","is","a","good","boy"]
let longestWord = brokenWords[0];

for (let i = 1; i < brokenWords.length; i++) {
  if (brokenWords[i].length > longestWord.length) {
    longestWord = brokenWords[i];
  }
}
console.log(longestWord); //Himanshu

// *********** Numbers & Math ***********
// 1. Generate a random number between 1 and 100.

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

// 2. Check whether a number is prime.

let num = 12;
let isPrime = true;

for (let i = 2; i < num / 2; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("Prime");
} else {
  console.log("Not a Prime");
}

// 3. Find factorial of a number using loops.

let number = 9;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(factorial);

// 4. Find Fibonacci series up to n numbers.
let n = 7;

let a1 = 0;
let b1 = 1;

console.log(a1); //0
console.log(b1); //1

for (let i = 2; i < n; i++) {
  let next1 = a1 + b1;
  console.log(next1);
  a1 = b1;
  b1 = next1;
}

// 5. Check whether a number is Armstrong number.

let num1 = 153;
let temp = num1;
let sum = 0;

while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** 3;
  temp = Math.floor(temp / 10);
}

if (sum === num) {
  console.log("Armstrong Number");
} else {
  console.log("Not Armstrong");
}

//  map(), filter(), forEach()

// 1. Double all numbers in an array using map().
// 2. Filter all students scoring above 80 marks.
// 3. Print all array values using forEach().
// 4. Convert array of names into uppercase.
// 5. Extract only even numbers using filter().

// 1. Double all numbers in an array using map():
const arr =[1,2,3,4,5];
const double =arr.map((n=>n*2));
console.log(double);

// 2. Filter all students scoring above 80 marks.
const stu ={anu:90 ,ram:89, beam:78 };
const above80 = Object.entries(stu).filter((key,mark)=> mark>80);
console.log(above80);

// 3. Print all array values using forEach().
const a =[1,2,34,5];
a.forEach(function(ele){
    return a;
})
console.log(a);

// 4. Convert array of names into uppercase.
const name=["ammu","keerth","naina"];

const upper=String(name).toUpperCase().split(","); // to convert array to string and then to uppercase and then back to array
console.log(upper);


// 5. Extract only even numbers using filter().
const c =[1,2,3,4,5,9,9,8];
const even = c.filter(n=>n%2==0);
console.log(even);
