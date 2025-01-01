// Comments - Single Line && Multiple Lines
/* hello on our 
console window */  
console.log("Hellow Joker");

//Operators
//Arithmetic operators
let a = 4;
let b = 3;
console.log("a =",a ,"b =",b)
console.log("a + b = ",a+b);    //Addition
console.log("a - b = ",a-b);    //Subtraction
console.log("a * b = ",a*b);    //Multiplication
console.log("a / b = ",a/b);    //Division
console.log("a % b = ",a%b);    //Modulus
console.log("a ** b = ",a**b);  //Exponent
//Unary operators :- //Increment  //Decrement
a++;
console.log("a++ = ",a);
a--;
console.log("a-- = ",a);
++a;
console.log("++a = ",a);
--a;
console.log("--a = ",a);

//Assignment Operators
let x = 5;
let y = 2;
let z = 3;
let i = 6;
let j = 8;
let k = 4;
x += 3;  //x = x + 3
console.log(x);
y -= 1;  //y = y - 1
console.log(y);
z *= 3;  //x = x + 3
console.log(z);
i /= 3;  //x = x + 3
console.log(i);
j %= 3;  //x = x + 3
console.log(j);
k **= 3;  //x = x + 3
console.log(k);

//Comparison Operators
let c = 4;
let d = 4;
let e = "4";
console.log("c == d", c==d);  //equal to
console.log("d == e", d==e);    
console.log("c != d", c!=d);    //not equal to
console.log("d === e", d===e);  //equal to & type
console.log("d !== e", d!==e);  //not equal to & type
console.log("d < e", d<e);
console.log("d > e", d>e);
console.log("d <= e", d<=e);
console.log("d >= e", d>=e);

//Logical operators
let f = 6;
let g = 6;
console.log("f == g", f==g);
console.log("f == 7", f==7);
console.log("f == g && f==7", f == g && f==7);
console.log("f == g || f==7", f == g || f==7);
console.log("f == g", !(f == g));


//Conditional Statements
let age = 25;
if(age > 18) {
    console.log("U can vote.");
}

if(age < 30) {
    console.log("U can't vote.");
}else{
    console.log("U can vote");
}
//if statement
let mode = "2";
let mode1 = 2
let color;

if(mode === "mode1") {
    color = "black";
}
if(mode === "light") {
    color = "white";
}
console.log(color);

//if-else statement
let muteOn = "play";
let sound;

if(muteOn === "pause"){
    sound = "muteOf";
}else{
    sound = "muteOn";
}
console.log(sound);

let num = 10;
if(num%2===0) {
    console.log("Number is even");
}else{
    console.log("Number is odd");
}

//Else-if
let umar = 18;
if(umar === 18) {
    console.log("Umar is 18");
}else if(umar < 16){
    console.log("Umar is less than 16");
}else{
    console.log("Default");
}


//Ternary Operators
let rating = 5;

let result = rating < 2 ? "Poor ratings" : "Good ratings"; 
console.log(result);
//Another way to write ternary conditions
rating < 2 ? console.log("Poor ratings") : console.log("Good ratings");


//Get user to input a number using prompt("Enter a number"). Check if the number is multiple of 5 or not.
// let tnum = prompt("Enter a number : ");    //prompt its like alert but it ask questions.
// if(tnum % 5 === 0){
//     console.log("Number is a multiple of 5");
// }else{
//     console.log("Number isn't multiple of 5");
// }

//Write a code which can give grades to students according to their scores:
// we can take input by using prompt
// let score = prompt("Enter a score between(0-100) : ");

// if(score>=90 && score<=100){
//     console.log("A");
// }else if(score>=70 && score<=89){
//     console.log("B");
// }else if(score>=60 && score<=69){
//     console.log("C");
// }else if(score>=50 && score<=59){
//     console.log("D");
// }else{
//     console.log("F");
// }