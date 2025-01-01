/*
//Callbacks, Promises, Asyn Await

//Synchronous -- sequence of instruc.. ---each ins.. wait for prev.. instr.. to complete its execution..
console.log("This is one");
console.log("This is two");
console.log("This is three");

//Asynchronous -- sometimes some instruc.. take a time to execute thats why after instruc.. will blocked ...Its asynchronous means its not wait either its executes flow of code as it is.. 
function myFunc(){
    console.log("Hello");
}
setTimeout(myFunc, 3000);  //timeout -- 2s = 2000 milisec..

//
setTimeout(()=>{
    console.log("Hii");
},3000);

//
console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("three");
},2000);
console.log("four");

//CallBacks
function sum(a,b){
    console.log(a+b);
}

function calCulator(a,b,sumCallback){
    sumCallback(a,b);
}

console.log(4,2,sum);  //sum is function ...as a argumnent pass
*/

//CallBack Hell -- Nested CallBacks 
// function getData(data,getNextdata){
//     setTimeout(()=>{
//         console.log("data",data);
//         if(getNextdata){
//             getNextdata();
//         }
//     },2000);
// }
// getData(1401,()=>{
//     getData(1402);
// });
// getData(1401,()=>{ //we can use multiple with 2s after 2s after..
//     getData(1402,()=>{
//         getData(1403,()=>{
//             getData(1404);
//         });
//     });
// });



//Promises
// let promise = new Promise((resolve,reject)=>{
//     console.log("I am promises");
//     resolve(12);
//     // reject("some error");
// });

// function getData(data,getNextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",data);
//             resolve("success");
//             if(getNextdata){
//                 getNextdata();
//             }
//         },5000);
//     });
// }


// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am promises");
//         resolve("success");
//         // reject("error");
//     });
// }

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promises is resolve",res);
// })

// promise.catch((err)=>{
//     console.log("promises is rejected",err);
// })


//Promises Chain
// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Async is start");
//             resolve("success");
//             // reject("somethig error occured");
//         },2000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Async is start");
//             resolve("success");
//             // reject("somethig error occured");
//         },2000);
//     });
// }

// function asyncFunc3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Async is start");
//             resolve("success");
//             // reject("somethig error occured");
//         },2000);
//     });
// }

// console.log("fetching data 1....");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data 2....");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//         console.log("fetching data 3....");
//         let p3 = asyncFunc2();
//         p3.then((res)=>{
//             console.log(res);
//         });
//     });
// });



//Async - Await
// async function myAsync(){
//     console.log("Hellow..");
// } 

// function api(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data",data);
//             resolve(200);
//         },2000)
//     })
// }

// async function getWeatherdata(){
//     console.log("fetching data....Api 1");
//     await api(1);  //1st call
//     console.log("fetching data....Api 2");
//     await api(2);  //2nd call
//     console.log("fetching data....Api 3");
//     await api(3);  //3rd call
//     console.log("fetching data....Api 4");
//     await api(4);  //4th call
//     console.log("fetching data....Api 5");
//     await api(5);  //5th call
//     console.log("fetching data....Api 6");
//     await api(6);  //6th call
//     console.log("fetching data....Api 7");
//     await api(7);  //7th call
// }


//IIFE using 
// function ife(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weathering",data);
//             resolve(200);
//         },2000);
//     });
// }

// async function getWeath(){
//     await ife(1);
// }

//Call without function name -- /IIFE
// (async()=>{
//     await ife(1);
//     await ife(2);
//     await ife(3);
//     await ife(4);
//     await ife(5);
// })();


//Practice


//CallBacks Hell
// function getData(data,getNextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather",data);
//             resolve("success");
//             if(getNextdata){
//                 getNextdata();
//             }
//         },2000);
//     });
// }


// getData(1401,()=>{
//     getData(1402,()=>{
//         getData(1403,()=>{
//             getData(1404,()=>{
//                 getData(1405);
//             });
//         });
//     });
// });



//Promises Chain
// function getData1(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather", data);
//             resolve("success");
//         }, 2000);
//     });
// }

// function getData2(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather", data);
//             resolve("success");
//         }, 2000);
//     });
// }

// function getData3(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather", data);
//             resolve("success");
//         }, 2000);
//     });
// }

// function getData4(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather", data);
//             resolve("success");
//         }, 2000);
//     });
// }

// function getData5(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather", data);
//             resolve("success");
//         }, 2000);
//     });
// }


// let p1 = getData1(1401);
// p1.then((res) => {
//     console.log(res);
//     let p2 = getData1(1402);
//     p2.then((res) => {
//         console.log(res);
//         let p3 = getData1(1403);
//         p3.then((res) => {
//             console.log(res);
//             let p4 = getData1(1404);
//             p4.then((res) => {
//                 console.log(res);
//                 let p5 = getData1(1405);
//                 p5.then((res) => {
//                     console.log(res);
//                 });
//             });
//         });
//     });
// });


//ASync - Await
function getData1(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather", data);
            resolve("success");
        }, 2000);
    });
}

// async function asynFunc(){   //call with function name
//     await getData1(1401);
//     await getData1(1402);
//     await getData1(1403);
//     await getData1(1404);
//     await getData1(1405);
// }

(async()=>{               //IIFE using --without calling function name
    await getData1(1401);
    await getData1(1402);
    await getData1(1403);
    await getData1(1404);
    await getData1(1405);
})();
