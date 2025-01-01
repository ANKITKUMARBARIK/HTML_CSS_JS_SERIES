/*
//Arrays = collection of mutlipe items of different type -- mutable ..u can changes
let marks = [23,43,54,65,76];
console.log(marks);
console.log(marks.length);   //length = property

let heroes = ["spider","batman","thor","hulk","ironman","shaktiman"];
console.log(heroes);
console.log(typeof(heroes));     //arrays is similar type of object

//array indices
let urmarks = [45,67,98,32,23];
console.log(urmarks[0]);
console.log(urmarks[2]);
console.log(urmarks[4]);

//Loops of Arrays
let fname = ["thug","karma","vishnu","dev"];

for(let i=0;i<4;i++) {
    console.log(fname[i]);
}
for(let j of fname) {
    console.log(j);
}
*/


//For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.
let sumMarks = [85,97,44,37,76,60];
let sum = 0;
for(let i of sumMarks){
    sum = sum + i;
}
// another method
// let avg = sum / sumMarks.length;
// console.log(`The average of marks is ${avg}`);
console.log(`The average of marks is ${sum/sumMarks.length}`);

//For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let mPrice = [250,645,300,900,50];
let offPrice;
for(let i=0;i<5;i++){
    offPrice = mPrice[i] / 10;
    mPrice[i] = mPrice[i] - offPrice;
    console.log(mPrice[i]);
}


//Arrays Methods
let veggies = ["potato","apple","papaya","lichi"];
let veggies2 = ["berry","banana"];
//push
pushAdd = veggies.push("chips");
console.log(veggies);
//pop
popdelete = veggies.pop();
console.log(popdelete);
console.log(veggies);
//tostring
convertString = veggies.toString();
console.log(convertString);
console.log(veggies);
//concat
concatJoin = veggies.concat(veggies2);
console.log(concatJoin);
console.log(veggies);
//unshift
unshiftStartadd = veggies.unshift("york");
console.log(unshiftStartadd);
console.log(veggies);
//shift
shiftStartdelete = veggies.shift("york");
console.log(shiftStartdelete);
console.log(veggies);
//slice
console.log(veggies.slice(2,5));
// splice  -- splice(add,remove,replace) -- ORIGINAL ARRAY CHANGE
let splicing = [1,2,3,4,5];
spliceMult = console.log(splicing.splice(2,2,101,102));
console.log(spliceMult)
console.log(splicing)

// Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// Remove the first company from the array.
// Remove Uber & Add Ola in its place.
// Add Amazon at the end.
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
console.log(companies.shift());
console.log(companies.shift(2,1,"Ola"));
console.log(companies.push("Amazon"));
console.log(companies);