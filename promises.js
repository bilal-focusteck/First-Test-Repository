//simple promise example
// let promise = new Promise(function (resolve, reject){
//     console.log("Hello from Promise");
//     resolve(50);
// })

// console.log("Hello one");
// console.log(promise);

// setTimeout(() => {
//     console.log("Hello two after 2 seconds");
// }, 2000);

// console.log("Hello three");


//.then() & .catch() to hold errors
// let p1 = new Promise((resolve, reject)=>{
//     console.log("This is p1 pending");
//     setTimeout(() => {
//         resolve(true);
//     }, 2000);
// });

// let p2 = new Promise((resolve, reject)=>{
//     console.log("This is p2 pending");
//     setTimeout(() => {
//         resolve("Resolved message from p2");
//         //reject(new Error("I am an Error"));
//     }, 2000);
// });

// p1.then((value)=>{
//     console.log(value);
// });
// p2.then((value)=>{
//     console.log(value);
// });


// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{resolve("done!!!")},2000);
// })
// promise.then(
//     result=>console.log(result), 
//     error=>console.log(error)
// );
// console.log(promise);

// let promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{reject(new Error("Error!!!"))},2000);
// })
// promise.catch(
//     error=>console.log(error)
// );
// console.log(promise2);


// function prom(complete){
//     return new Promise((resolve, reject)=>{
//         console.log("Proceeding...");
//         setTimeout(()=>{
//             if(!complete){
//                 resolve("I am resolved");
//             }
//             else{
//                 reject("I am rejected");
//             }

//         },3000)  
//     })
// };
// let onfulfillment=(result)=>{
//     console.log(result);
// };
// let onrejection=(error)=>{
//     console.log(error);
// };
// prom(true).then(onfulfillment).catch(onrejection);


//promise.all
// let p1 = new Promise((resolve, reject)=>{
//     console.log("This is first promise running...");
//     setTimeout(()=>{
//         console.log("First promise resolved");
//     }, 1000)
//     resolve(10);
// });

// let p2 = new Promise((resolve, reject)=>{
//     console.log("This is second promise running...");
//     setTimeout(()=>{
//         console.log("Second promise resolved");
//     }, 2000)
//     resolve(20);
// });

// let p3 = new Promise((resolve, reject)=>{
//     console.log("This is third promise running...");
//     setTimeout(()=>{
//         console.log("Third promise resolved");
//     }, 3000)
//     resolve(30);
// });

// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(`Results: ${result}`);
// }).catch((error)=>{
//     console.log(`Errors are ${error}`);
// });


//promise.all for calculating sum of the resolved values
// let p1 = new Promise((resolve, reject)=>{
//     console.log("This is first promise running...");
//     setTimeout(()=>{
//         console.log("First promise resolved");
//     }, 1000)
//     resolve(10);
// });

// let p2 = new Promise((resolve, reject)=>{
//     console.log("This is second promise running...");
//     setTimeout(()=>{
//         console.log("Second promise resolved");
//     }, 2000)
//     resolve(20);
// });

// let p3 = new Promise((resolve, reject)=>{
//     console.log("This is third promise running...");
//     setTimeout(()=>{
//         console.log("Third promise resolved");
//     }, 3000)
//     resolve(30);
// });
// var total =0;
// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(`Results: ${result}`);
//     for(var i in result){
//         total+=result[i];
//     }
//     console.log(`Sum of results are: ${total}`);
// }).catch((error)=>{
//     console.log(`Errors are ${error}`);
// });


