//Functions
function myFunction() {
    console.log("Hi kaise ho aap");
    console.log("Acche hain hum..aap batao");
}
myFunction();  //function call or invoke
//
function myFunction1(mssg) {   // () -- parameter are local variables of functions ,take input on funtions
    console.log(mssg);
}
myFunction1("I love js");  //()  -- argument
//
function funcSum(no1, no2) {
    console.log(no1 + no2);    
}
funcSum(3, 4);
//
function fuSum(x, y) {
    s = x + y;
    return s;
}
let val = fuSum(2, 10);
console.log(val);

//
// Arrow Functions
const arrowFunc = (a, b) => {
    console.log(a + b);
};
console.log(arrowFunc);
arrowFunc(5, 9);
//
const arrowMult = (c, d) => {
    return c * d;
};
console.log(arrowMult);
console.log(arrowMult(2, 6));


//Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.
function countVowels(str) {  
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels("College"));

//Create an arrow function to perform the same task.
const counVowels = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
console.log(counVowels("College"));


//For each Loop
let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){  // val - value at each index
//     console.log(val);
// })
//arrow function for each loop
arr.forEach((val) => {  // val - value at each index
    console.log(val);
})




//For a given array of numbers, print the square of each value using the forEach loop.
let arrey = [1,2,3,4,5];
arrey.forEach((val) => {  // val - value at each index
    console.log(val*val);
})






//Arrays Method
// Map    -- store the new array
let nams = [2,3,6,5];
nams.map((val) => {
    console.log(val);
})

let numArray = nams.map((val) => {
    return val;
})
console.log(numArray);

//Filter  -- after done some operations and store to new array..
let yams = [45,46,47,48];
let filArray = yams.filter((val) => {
    return val % 2 === 0;
})
console.log(filArray);

//Reduce  -- after done some operations and store to new array in single value..
let reduarr = [1,2,3,4];
const reArray = reduarr.reduce((pre,curr) => {
    return  pre + curr;
})
console.log(reArray);

let reduarr1 = [87,94,556,42];
const reArray1 = reduarr1.reduce((pre,curr) => {
    return  pre > curr ? pre : curr;
})
console.log(reArray1);

//We are given array of marks of students. Filter our of the marks of students that scored 90+.
let yams1 = [45,76,94,59];
let filArray1 = yams1.filter((val) => {
    return val > 90;
})
console.log(filArray1);

//Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array.Use the reduce method to calculate product of all numbers in the array.
let n = prompt("Enter a number : ");
let arre = [];
for(let i=1;i<=n;i++){
    arre[i-1] = i;
}
console.log(`array : ${arre}`);  //print array
const reArraye = arre.reduce((pre,curr) => {
    return  pre + curr;
})
console.log(`sum : ${reArraye}`);  //print sum
const reArrayee = arre.reduce((pre,curr) => {
    return  pre * curr;
})
console.log(`factorial : ${reArrayee}`);  //print factorial