//Loops
//for loop
for(let i=1;i<10;i++) {
    console.log("BCA");
}

for(let i=1;i<10;i++) {
    console.log(i);
}

let sum = 0;
for(let i=1;i<=5;i++) {
    sum = sum + i;
}
console.log("sum =", sum);

//while loop
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}

//do-while loop
let j = 1;
do{
    console.log(j);
    j++;
}while(j<=5);

//for-of loop
for(let name of "Ankit") {
    console.log(name);
}

//for-in loop
let student = {
    fname : "lorem",
    age : 19,
    course : "BCA"
};
for(let i in student) {
    console.log("key =",i ,"value =",student[i]);
}



//Print all even numbers form 0 to 100.
for(let i=0;i<=100;i++){
    if(i%2 === 0){
        console.log(i);
    }
}



//Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
// let psswd = 25;
// let userNum = prompt("Enter Password : ");

// while(userNum != psswd) {
//     userNum = prompt("Incorrect! Enter correct Password : ");
// }



//Strings  -- Immutable .. can't change
let stur = "College";
console.log(stur);
console.log(stur.length);
console.log(stur[0]);

//Template Literals
let specialstring = `Focus on the hard work not for success ${1+2+3}`;  // {} means expressions
console.log(specialstring);

let obj = {
    fname : "Lorem",
    age : 19
};
console.log(`Name is ${obj.fname} and age is ${obj.age}`);


//Escape characters
console.log("Bla\tck\nSlashn")
let stru = "Black\tBoxai";
console.log(stru.length);

//String Methods
let simple1 = "  Ai Generate ";
console.log(simple1.toLowerCase());
console.log(simple1.toUpperCase());
console.log(simple1.trim());        //starting ending whitespaces removing

let simple2 = "Code";
console.log(simple2.slice(2,3));
console.log(simple1.concat(simple2));
console.log(simple1.replace("Ai","Devin"));
console.log(simple1.replace("i","n"));
console.log(simple1.replace("i","n"));
console.log(simple1.replaceAll("i","n"));
console.log(simple1.replaceAll("i","n"));
console.log(simple1.charAt(2));  //find char index  



//Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.
// let otherName = prompt("Enter a full name by generate ur insta username : ");
// let nameLower = otherName.toLowerCase();
// let nameLength = otherName.length;
// console.log(`@${nameLower}${nameLength}`); 

// //another method
// instaUser = `@${otherName.toLowerCase()}${otherName.length}`;
// console.log(instaUser);


