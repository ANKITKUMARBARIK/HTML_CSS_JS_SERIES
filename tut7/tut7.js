//getAttribute -- get attribute name 
// let id = div.getAttribute("id");
// console.log(id);
let divi = document.querySelector("div");
console.log(divi.getAttribute("id"));

//setAttribute -- set attribute value
let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));

//node.style
let diva = document.querySelector("div");
console.log(diva.style);

diva.style.backgroundColor = "green";
diva.style.fontSize = "30px";
diva.innerText = "Hello!";
// div.style.visibility = "hidden";


//Inserts Element
//create elements --- add element
// create element
let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn); 

// add element
// node.append(el)  --add at the end of node(inside)
// let div = document.querySelector("div");
// div.append(newBtn);

//node.prepend(el)  --add at the start of node(inside)
// let div1 = document.querySelector("div");
// div1.prepend(newBtn);

//node.before(el)  --add before the node(outside)
// let div2 = document.querySelector("div");
// div2.before(newBtn);

//node.after(el)  --add after the node(outside)
let div3 = document.querySelector("div");
div3.after(newBtn);

//
let newHeading = document.createElement("h1");
newHeading.innerText = "Hi Coders !";

let div4 = document.querySelector("div");
div4.before(newHeading);

//Delete Element
//node.remove() -- remove the node
let paraRem = document.querySelector("p");
paraRem.remove();



