// async function writing(){
//     return "hello"
// };
// console.log(writing());

// let myfunc = async function (){
//     return "Bilal";
// };
// console.log(myfunc());

// let myfunc2 = async ()=>{
//     return "World...";
// }
// console.log(myfunc2());

// let myfunc2 = async ()=>{
//     console.log ("Bilal");
//     await console.log ("Hello");
//     console.log ("World");
// }
// myfunc2();
// console.log("Hello from outside await");
// console.log ("Hello from outside await2");

// async function abc() {
//     let myfunc = async () => {
//         console.log("Bilal");
//         await console.log("Hello");
//         console.log("World");
//     }
//     let myfunc2 = async () => {
//         return new Promise((res, rej) => {
//             res(5);
//         })
//     }
//     console.log("Hello from outside await msg 1");
//     console.log("Hello from outside await msg 2");
//     let x = await myfunc2();
//     console.log(x);
//     await myfunc();
//     console.log("Hello from outside await msg 3");
//     console.log("Hello from outside await msg 4");
// }

// abc();