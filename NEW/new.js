// let age = 25;
// let a = 5;
// let b = 6;
// if(age>18){
//     console.log("Age is greater");
// }
// else{
//     console.log("Age is less");
// }

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(a--);
// console.log(++a);
// console.log(--a);
// console.log(a+=2);
// console.log(a-=2);
// console.log(a/=2);
// console.log(a*=2);
// console.log(a%=2);
// console.log(a**=2);
// console.log(a==18);
// console.log(a===18);
// console.log(a!=18);
// console.log(a!==18);
// console.log(a<18);
// console.log(a>18);
// console.log(a<=18);
// console.log(a>=18);
// (a>b) ? console.log("A is big") : console.log("A is Small");
// //&&
// //||
// //!(a==b)
// if(a>18){
//     console.log(" are u kiudding");
// }
// else if(age>17){
//     console.log(" atre u student");
// }
// else if(age>17){
//     console.log(" atre u student");
// }
// else if(age>17){
//     console.log(" atre u student");
// }
// else{
//     console.log("error");
// }

// let agi=2
// switch(agi){
//     case 1:
//         console.log("hi");
//         break;
//     case 2:
//         console.log("hlo");
//         break;
//     case 3:
//         console.log("hiiii");
//         break;
//     default:
//         console.log("Err");
// }

// let x = 1;
// while(x<5){
//     console.log(x)
//     x++;
// }

// for (let x = 0; x < 10; x++) {
//     console.log(x);
// }

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<5);

// for(let c of "ankit"){
//     console.log(c);
// }

// let obj = {
//     fname : "harry",
//     age : 19
// };
// for(i in obj){
//     console.log(i,obj[i]);
// }

// function myFunc(name) {
//     console.log(`Hey ${name}...How are you`);
//     console.log(`Hey ${name}...You are nice`);
//     console.log(`Hey ${name}...But U are lazy`);
// }
// myFunc("Ankit");
// myFunc("Shivam");
// myFunc("Khushi");

// function sum(a,b) {
//     sum = a + b;
//     return sum;
// }
// result = sum(2,4);
// console.log("Sum : ",result);

// const funVariable = (x) =>{
//     console.log("I am a arrow function",x);
// }
// funVariable(134);

// a = prompt("Enter no1 : ");
// b = prompt("Enter no2 : ");
// c = prompt("Enter operator : ");
// console.log(`Result is ${eval(`${a}${c}${b}`)}`);
// alert(`Result is ${eval(`${a}${c}${b}`)}`);

// var a = "  Hey Coders";
// var b = "Enjoy ur day";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);

// console.log(a.length);
// console.log(`His name is Berry..${a} enjoy ur day`);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.slice(4,7));
// console.log(a.replace("e","a"));
// console.log(a.replaceAll("e","a"));
// console.log(a.concat(b));
// console.log(a.trim());
// console.log(a.charAt(2));
// console.log(b.indexOf("j"));
// console.log(b.startsWith("En"));
// console.log(b.endsWith("ay"));



//Create a business name generator by cobining list of adjectives and shop name and another word.
// let rand = Math.random();
// let first, second, third;
// //Adjectives
// if(rand<0.33){
//     first = "Crazy";
// }
// else if(rand>=0.33 && rand<0.66){
//     first = "Amazing";
// }
// else{
//     first = "Fire";
// }
// //Shop Name
// rand = Math.random();
// if(rand<0.33){
//     second = "Engine";
// }
// else if(rand>=0.33 && rand<0.66){
//     second = "Foods";
// }
// else{
//     second = "Garments";
// }
// //Another Word
// rand = Math.random();
// if(rand<0.33){
//     third = "Bros";
// }
// else if(rand>=0.33 && rand<0.66){
//     third = "Limited";
// }
// else{
//     third = "Hub";
// }
// //
// console.log(`${first}${second}${third}`);


//Write a program to calculate factorial of number using reduce and for loop.
// n = prompt("Enter a number : ");
// let sum = 1;
// for(let i=1;i<=n;i++){
//     sum = i + sum;
// }
// console.log(sum);
// let x = "143";
// console.log(BigInt(x));
// console.log(Symbol(x));

// let y = confirm("If u leave this page then ur sytem hs been blast");
// if(y){
//     console.log("Boom");
// }
// else{
//     console.log("Fhus");
// }

// let marks = [1,4,3,5];
// console.log(marks);
// marks[2] = 4;
// console.log(marks);
// console.log(typeof(marks));
// console.log(delete marks[2]);


let mode = document.querySelector("#mode");
let currMode = "light";
mode.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark";
        let body = document.querySelector("body");
        body.style.backgroundColor = "black";
        body.style.transition = "0.5s";
    }
    else{
        currMode = "light";
        let body = document.querySelector("body");
        body.style.backgroundColor = "white";
        body.style.transition = "0.5s";
    }
});



//DOM
// document.title = "Hlo Coders";
// console.log(document.title);
// console.log(document.body);
// document.body.style.backgroundColor = "aqua";

//ChildNodes
// console.log("Hello World");
// document.body.childNodes
// document.body.childNodes[1]
// document.body.childNodes[1].childNodes

//FirstNodes
// document.body.firstChild

//LastNodes
// document.body.lastChild

//FirstElementchild
// document.body.firstElementChild
// document.body.firstElementChild.childNodes
// document.body.firstElementChild.children

//LastElementchild
// document.body.LastElementChild
// document.body.lastElementChild.childNodes
// document.body.lastElementChild.children

//parentElement
//document.LastElementChild.parentElement
//document.FirstElementChild.parentElement

// document.body.firstElementChild.children[4].previousElementSibling
// document.body.firstElementChild.children[4].nextElementSibling
// document.body.firstElementChild.children[4].nextSibling
// document.body.firstElementChild.children[4].previousSibling



// let boxes = document.getElementsByClassName("box");
// boxes[2].style.backgroundColor = "yellow";

// document.querySelector(".box").style.backgroundColor = "green";

// document.querySelectorAll(".box").forEach((e) => {
//     e.style.backgroundColor = "green";
// });


// let boxes = document.querySelector(".container").children;
// console.log(boxes);

// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()*255);
//     let val2 = Math.ceil(0 + Math.random()*255);
//     let val3 = Math.ceil(0 + Math.random()*255);
//     return `rgb(${val1},${val2},${val3})`;
// }
// Array.from(boxes).forEach((e)=>{
//     e.style.backgroundColor = getRandomColor();
//     e.style.color = getRandomColor();
// });