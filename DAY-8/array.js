
//array method sort

let c = [7,19,0,8];
let d = c.sort((a,b) => a-b); //sorts the array in ascending order
console.log(d);

let str =["banana","apple","grape","orange"];
let sortedStr = str.sort(); 
console.log(sortedStr);

// 1.Find the largest and smallest number in an array.

let arr = [3, 1, 4, 1, 5, 9];
let max = arr[0];
let min = arr[0];   
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
    } else if(arr[i]<min){
        min = arr[i];
    }
}
console.log("Largest number:", max);
console.log("Smallest number:", min);   

// 2. Remove duplicate elements from an array.
let arr2 = [1, 2, 3, 2, 4, 1, 5];
let uniqueArr = [...new Set(arr2)];
console.log("Array with unique elements:", uniqueArr);


const birds = ["sparrow", "eagle", "sparrow", "parrot", "eagle"];
const uni =birds.filter((ele,ind)=>birds.indexOf(ele)===ind);
console.log(uni);


//Using includes() with Arrays
let arr3 = [1, 2, 3, 4, 5];
let uniqueArr2 = [];
for(let i=0; i<arr3.length; i++){
    if(!uniqueArr2.includes(arr3[i])){

        uniqueArr2.push(arr3[i]);
    }
}
console.log("Array with unique elements:", uniqueArr2);
//using reduce
let arr4 = [1, 2, 3, 2, 4, 1, 5];   
let uniqueArr3 = arr4.reduce((acc, curr) => {
    if(!acc.includes(curr)){
        acc.push(curr);
    }   
    return acc;
}, []);
console.log("Array with unique elements:", uniqueArr3);

//case sensitive include
let str2 = "Hello World";
console.log(str2.includes("he")); // false
console.log(str2.includes("Hello")); // true

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape'));  // false