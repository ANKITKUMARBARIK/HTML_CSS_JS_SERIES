// //Ques1--
// let count = 0;
// for (const char of "College") {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         count++;
//     }
// }
// console.log(`Total number of vowels : ${count}`);


// //Ques2
// //Prompt - Instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.
// let user = prompt("Enter ur name : ");
// console.log(user);


// //Ques3
// const strNew = " Ballo Bhai    ";
// console.log(strNew.trim());


// //Ques4
// // const pincodePattern = /^[0-9]{6}$/;
// let x = prompt("Enter a 6 digit pincode : ");
// while(x.length !== 6) {
//     x = prompt("Please Re-enter the correct pincode..");
// }
// console.log(x);


// // Ques5
// let email = prompt("Enter a email address : ")
// while(email.includes('@','.') !== true){
//     email = prompt("email must contains @ and .(dot) symbols");
// }
// console.log("Email Address Confirmed");


// // Ques6
// let x = prompt("Enter a mobile number : ");
// while(x.length !== 10) {
//     x = prompt("Enter a valid mobile number : ");
// }
// console.log("Mobile number confirmed");



// //1
// const arr = [2, 4, 5, 5, 6, 7];
// const unique = [...new Set(arr)];
// console.log(unique);


// //2
// function dupVal(arr) {
//    return arr.filter((res) => res);
// }
// const sampleArray = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// console.log(dupVal(sampleArray));


// //3
// function palDom(str) {
//    let splitt = str.split('').reverse().join('');
//    console.log(splitt);
//    let origin = str;
//    splitt === origin ? console.log("Palindrome") : console.log("Not Palindrome");
// }
// palDom("4221");


// //4
// function voWel(str) {
//    let count = 0;
//    for (let i of str) {
//       if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
//          count++;
//       }
//    }
//    console.log(count);
// }
// voWel("ankitii");


// // 5
// let str = "abcabcbb";
// let convert = str.split('');
// const unique = [...new Set(convert)];
// console.log(unique.length);


// //6
// function arrClone(arr) {
//    let clone = arr.slice();    //create shallow copy
//    console.log(clone);
//    let origin = arr;
//    console.log("Original Array : ", origin);
//    console.log("Clone Array : ", clone);
//    console.log(origin === clone);
// }
// const arra = [1, 2, 3, 4, 5];
// arrClone(arra);


// //7
// function lonGest(str) {
//    let match = str.split(' ').reduce((pre, curr) => {
//       return pre.length > curr.length ? pre : curr;
//    })
//    console.log(match);
// }
// lonGest("Web Development Tutorial");



// const a = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// const res = a.filter((e) => e)
// console.log(res);



// let dev = "Web Development tutorialfffffffffffffffffffffff";
// let result = dev.split(' ').reduce((pre,curr)=>{
//     return pre.length>curr.length? pre : curr;
// });
// console.log(result);

// let dev = "Web Development Tutorial";
// let result = dev.split(' ');
// let max=result[0];
// for (let i = 0; i < result.length; i++) {
//     if (result[i].length > max.length) {
//         max = result[i];
//     }
// }
// console.log(max);



////////////////////////////////////////////////
//1
// const vowels = "Full Stack Dev"
// let count = 0;
// for(let i of vowels){
//     if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'){
//         count++;
//     }
// }
// console.log(`Total number of vowels : ${count}`);


//3
// const unico = " Freedom  Guru "
// console.log(unico.replaceAll(' ',''))


//4
// const pincode = 395017;
// if(pincode.toString().length === 6){
//     console.log(`Pincode Validated Successfully`)
// }else{
//     console.log(`Pincode is 6 digits only !!!`)
// }


//5
// const email = "syncodx@gmail.com"
// if(email.includes('@') && email.includes('.')){
//     console.log(`Email Validated Successfully`)
// }else{
//     console.log(`email must contains @ and .(dot) symbols`)
// }


//6
// const mobNum = 9313233661;
// if(mobNum.toString().length == 10){
//     console.log(`Mobile Number Entered Successfully`)
// }else{
//     console.log(`mobile number is 10 digits only`)
// }

//

// let a = 4;
// let b = 5;
// let c = 6;
// // a>b?a>c?a:c:b>c?b:c
// a>b? (a>c?a:c) : (b>c?b:c)
// console.log(a>b? (a>c?a:c) : (b>c?b:c))


//


// function myfunc(dupli){
//     return dupli.filter((res)=> res)
// }
// const duplicate = [NaN, 0, 15, false, -22, "", undefined, 47, null]
// console.log(myfunc(duplicate))

// //
// const original = [1,2,2,4,6,7,6]
// console.log([...new Set(original)])



// //
// function palinDro(pall){
//     let reve = pall.split('').reverse().join('')
//     let origin = pall
//     origin === reve ? console.log("Palindrome") : console.log("Not Palindrome");
// }

// let sidha = "1221"
// palinDro(sidha)


// //
// function coursing(course){
//     let match = course.split(' ').reduce((pre,curr)=>{
//         return pre.length > curr.length ? pre : curr;
//     })
//     console.log(match)
// }

// const courses = "Web Development Tutorial"
// coursing(courses)


