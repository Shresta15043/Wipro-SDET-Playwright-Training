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
