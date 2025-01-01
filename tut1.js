console.log("Hello Prithvi");   // log means - print messages
console.log("Age is 19");
console.log("High Language");
console.log("Lightweight Language");
console.log("Ankit Kumar Barik");

//Variables   = equal to means assignment operators
_age = 19;
console.log(_age);
fullName = "Lorem";          //fullName - this variable name is camel case.
console.log(fullName);
$price = 34.5;
console.log($price);
x = null;
console.log(x);
y = true;
console.log(y)
z = undefined;
console.log(z);
isFollow = true;
console.log(isFollow)


//Variables --
let lastName = "Barik";   //let means cannot be re-declared but can be updated. A block scope variable...
console.log(lastName);

const umar = 20;      //const means cannot be re-declared or updated. A block scope variable...
console.log(umar);

let j;
console.log(j);


//Data Types:--Primitive and Non-Primitive
//Primitive data types :-
//numbers - positive,negative,decimal
let typeofPrice = 45;
console.log(typeof(typeofPrice));
//strings
let typeofName = "Jonny";
console.log(typeof(typeofName));
//boolean
let typeofFollow = true;
console.log(typeof(typeofFollow));
//undefined
let typeofUndefine;
console.log(typeofUndefine)
console.log(typeof(typeofUndefine));
//null
let typeofEmpty = null;
console.log(typeof(typeofEmpty));
//bigint
let typeofBigint = BigInt("1234");
console.log(typeof(typeofBigint));
//symbol
let typeofSymbol = Symbol("Hello!");
console.log(typeof(typeofSymbol));

//Non-Primitive:--
//objects - arrays, functions

//Objects means collection of values.
//Values stored by -- key : value

//Objects
const student = {         //student is Object
    fName : "Devin",
    fAge : 19,
    cgpa : 8.73,
    isPass : true
};

console.log(student);
console.log(typeof(student));
console.log(student["fName"]);
console.log(student["19"]);
//change something -- Const ke key ko update kar sakte hain Objects mein
student["fName"] = "Sharma Ji";
console.log(student["fName"]);
student["fAge"] = student["fAge"] + 1;
console.log(student["fAge"]);


// Create a const object called "product" to store information show in the picture.
const project = {
    pName : "Parker Jotter Standard CT Ball Pen",
    pRating : 5,
    pOffer: 5,
    pPrice: 270
};

console.log(project);