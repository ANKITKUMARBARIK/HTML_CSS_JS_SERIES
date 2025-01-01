/*
//DOM -- Document Object Model  -- u can access html code in js through window object.. html code /element ,that covert into object in javascript--that special object name document and that document has avialable at window object..
// console.dir(window.document);

//Window object --- global object
console.log(window);
window.console.log(window);
// window.alert("hello");

//DOM Manipulation
//selecting with id
let heading = document.getElementById("heading-id");
console.log(heading);
console.dir(heading);
//selecting with class
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);
//selecting with tag
let parahs = document.getElementsByTagName("p");
console.dir(parahs);
console.log(parahs);
*/
//Query Selector  -- return first element
let elements = document.querySelector("p");
console.dir(elements);
console.log(elements);
//Query Selector All  -- return node list  --node list means DOM tree that each element has node.. 
let elements1 = document.querySelectorAll("p");
console.dir(elements1);
console.log(elements1);

let elements2 = document.querySelectorAll(".heading-class");
console.dir(elements2);
console.log(elements2);

let elements3 = document.querySelectorAll("#heading-id");
console.dir(elements3);
console.log(elements3);

//tagname
console.dir(document.body.firstChild);
console.log(document.querySelector("body"));
console.dir(document.querySelector("body").children);

//innertext
console.dir(document.querySelector("body").innerText);

//innerhtml
console.dir(document.querySelector("body").innerHTML);

// textContent
console.dir(document.querySelector("body").textContent);



//Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS.
let h2 = document.querySelector("h2");
// console.log(h2);
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Mlp College"; //concatenate


//Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.
let divs = document.querySelectorAll(".box");
let idx = 1;
console.dir(divs);
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);
//developer level
for(di of divs){
    di.innerText = `Hello ${idx}`;
    idx++;
}
//beginner level
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";


