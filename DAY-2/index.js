let a= "Ayush";
let b = "Likkie";
let c = "Daniel";

let d = "Hello "+ a + ", "+b+ " and " + c+ "!";
// console.log(d);

let e = `Hello ${a}, ${b} and ${c}!`;
// console.log(e);

let f = `The length of a is ${a.length * 2}`;
// console.log(f);


//Function

// function greet(name){
//     return `Hello, ${name}!`;
// }
// console.log(greet("siva"));




// function table(num){
//     for(let i =1;i<=10;i++){
//         // console.log(num + " x "+i + " = " + (num*i));
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }


// table(5);


//Arrow function

let sum1 =(x,y)=>{
   return x+y;
}
    

console.log(sum1(5,6));


let sum2 =(x,y)=> x+y;
console.log(sum2(4,4));


let arr = [1, 2, true, "name", 5];

// arr.map(x => x*5);
// arr.forEach(function(x){
//     console.log("Element after * 2:", x*2)
// })

arr.filter(x => typeof(x) === "number").map(x => x*5).forEach(x=> console.log("Element after *2: ",x*2 ))



//Generat random value

console.log(Math.random() * 100) //0-100
console.log(Math.random() * 10) //0-10


//floor => rounds down to nearest integer

console.log(Math.floor(Math.random()*10)+1)// every time it gives whole number

console.log(Math.ceil(Math.random()*100))


console.log(5 == "5")
console.log(5 === "5")


let str = "5";
console.log( Number(str))
console.log(typeof Number(str))

let val = "2.07";

console.log(parseInt(val))
console.log(parseFloat(val))


//Array

let names = ["Joseph", "Rosie", "Carrie"];

console.log(names.indexOf("Joseph"));
console.log(names.indexOf("Nick"));
console.log(names.includes("Rosie"));
console.log(names.includes("Nick"));
console.log(names.length);
console.log(names[1]);
console.log(names[names.length-1]);
names.push("John");
console.log(names);
console.log(names.pop());
names.unshift("Nichola");
console.log(names);
console.log(names.shift());
console.log(names);


let valToBeFind = "Carrie";
let index = -1;

for(let i =0;i< names.length;i++){
    if(names[i] === valToBeFind){
        index = i;
        break;

    }
}
console.log(index);





// console.log(names.splice(1,1));





//Reduce function

const prices = [10, 20, 30, 40]; 

const product = prices.reduce((acc,curr)=> {
    return acc * curr},1);

    console.log(product);


const fruits = ['papaya', 'banana', 'cherry', 'papaya', 'papaya', 'mango', 'mango']; 
const tally = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(tally);




