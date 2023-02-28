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
let p1 = new Promise((resolve, reject)=>{
    console.log("This is p1 pending");
    setTimeout(() => {
        resolve(true);
    }, 2000);
});

let p2 = new Promise((resolve, reject)=>{
    console.log("This is p2 pending");
    setTimeout(() => {
        resolve("Resolved message from p2");
        //reject(new Error("I am an Error"));
    }, 2000);
});

p1.then((value)=>{
    console.log(value);
});
p2.then((value)=>{
    console.log(value);
});