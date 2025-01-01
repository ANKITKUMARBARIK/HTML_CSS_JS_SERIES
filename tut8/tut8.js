// Events -- change in set of an object
// event handling
// onclick
// let btn1 = document.querySelector("button");
// btn1.onclick = () => {
//     console.log("Button is Clicked");
// }


//ondblclick

//onmouseover
let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("Mouse is hover !");
}

//Event Object

let btn1 = document.querySelector("button");
btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);    //event type
    console.log(e.target);  //event target
    console.log(e.clientX); //event 
    console.log(e.clientY);
}

//Event Listener
//node.addEventListener(event,callback)
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click",() => {
    console.log("Button3 was clicked -- handler1");
});

btn3.addEventListener("click",(e) => {
    console.log("Button3 was clicked -- handler2");
    console.log(e);
    console.log(e.type);    //event type
    console.log(e.target);  //event target
});

btn3.addEventListener("click",(e) => {
    console.log("Button3 was clicked -- handler3");
    console.log(e);
    console.log(e.type);    //event type
    console.log(e.target);  //event target
});


//node.removeEventListener(event,callback)
const handler3 = () => {
    console.log("Button3 was clicked -- handler3");
};
btn3.addEventListener("click",handler3);

btn3.removeEventListener("click",handler3);



//Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let mode = document.querySelector("#mode");
let currMode = "light";
mode.addEventListener("click",() => {
    if(currMode === "light"){
        currMode = "dark";
        let body = document.querySelector("body");
        body.style.backgroundColor = "black";
    }
    else{
        currMode = "light";
        let body = document.querySelector("body");
        body.style.backgroundColor = "white";
    }
    console.log(currMode);
});


