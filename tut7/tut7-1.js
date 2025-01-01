//Create a new button element. Give it a text “click me”, background color of red & text color of white. Insert the button as the first element inside the body tag.
let nayaBtn = document.createElement("button");
console.log(nayaBtn);
nayaBtn.innerText = "Click karo bhai";
nayaBtn.style.backgroundColor = "red";
nayaBtn.style.color = "white";
let nayadiv = document.querySelector("body");
nayadiv.prepend(nayaBtn);


//Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element. Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
let para = document.querySelector("p");
console.log(para.classList.add("newClass"));
//U can remove also
// para.classList.remove("newClass");

