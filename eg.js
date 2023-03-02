// b=5;
// var a=b=6;
// console.log(a);
// console.log(b);

// let message = "hello";
// message = 123456;
// console.log(message)
// console.log(typeof(message))

// // let apples = "2";
// // let oranges = "3";

// // // both values converted to numbers before the binary plus
// // console.log( +apples + +oranges ); 

// let x, y, z;

// x = y = z = 2 + 2;

// console.log( x );
// console.log( y );
// console.log( z );

// // console.log("new function")
// // let e = 1, r = 1;

// // console.log( ++e ); // 2, prefix form returns the new value
// // console.log( r++ ); // 1, postfix form returns the old value

// // console.log( e ); // 2, incremented once
// // console.log( r );

// // //ternary operator "? :"
// let age = 22;
// let accessAllowed = (age > 18) ? true : false;
// console.log(accessAllowed);

// let access = (age > 18) ? console.log("yes allowed") : (age <18) ? console.log("no brother"): console.log("bye bye")
// // console.log(access);

// // //Nullish coalescing operator '??' it checks null and return if get 
// // //value, "||" behaves the same way As of '??' but returns first true 
// // //value and '??' returns first exisitng value
// // let firstName = null;
// // let lastName = null;
// // let nickName = "found first exising element";
// // // shows the first defined value:
// // console.log(firstName ?? lastName ?? nickName ?? "hfdhf");

// // //"||" operator fid first true value
// let fname = null;
// let lname = "hello";
// let nname = "Supercoder";

// // shows the first truthy value:
// console.log((fname || lname || nname || "hello"));

// let height = 0;
// console.log((height || 100)); // 100
// console.log((height ?? 100)); // 0

// // program to check pass or fail using TERNARY OPERATOR
// //let marks = prompt('Enter your marks :');
// let marks = 39;
// let result = (marks >= 40) ? 'pass' : 'fail';
// console.log(`You ${result} the exam.`);

// //check type
// // let obj1 = {abc:"abc"};
// // let obj2 = {abc:"abc"};
// // let obj3 = Object.assign(obj1,obj2)
// // console.log(obj3===obj1);
// // console.log({obj1,obj2,obj3});

// //how to check if two objects are equal
// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// // let obj1 = {abc:"abc",def:"def"};
// // let obj2 = {def:"def",abc:"abc"};
// // function check (obj1, obj2){
// //   const entry1 = Object.keys(obj1);
// //   const entry2 = Object.keys(obj2);
// //   if (entry1.length !== entry2.length){
// //     return false;
// //   }
// //   for (let i =0;i<entry1.length;i++){
// //     if (obj1[entry1[i]]!==obj2[entry1[i]]){
// //       return false;
// //     }
// //   }
// //   return true;    
// // }
// // console.log(check(obj1, obj2));

// // //check if main object dies then what happened to inner objects or keys values
// let shopping = {
//   pname: "Product 1",
//   price: 3000,
//   availability: false,
//   description: {
//       height: 13,
//       width: 15
//   },
//   sizes: [20, 30, "medium", "large"]
// }
// let ref1=shopping.description;
// shopping=null;
// console.log(ref1)
// let ref2 = ref1;
// console.log(ref2)

// // //list 
// // let list = { value: 1 };
// // list.next = { value: 2 };
// // list.next.next = { value: 3 };
// // list.next.next.next = { value: 4 };
// // list.next.next.next.next = null;
// // console.log(list);

// // //spread function example
// // let arr = [87, 5, 1];
// // console.log( Math.max(...arr) ); 

// // let arr1 = [1, -2, 3, 4];
// // let arr2 = [8, 30, -8, 1];
// // console.log( Math.max(10,...arr1,35, ...arr2,33) );

let user = {
  firstName: "John",
  sayHi() {
    return (`Hello, ${this.firstName}!`);
  }
};

let pol = {firstName: "Bilal"};
let f = user.sayHi.bind(pol);
console.log(f());
// setTimeout(f, 3000);
// setTimeout(function(){
//   user.sayHi()
// }, 5000);
// setTimeout(user.sayHi(),2000)
// setTimeout(()=>user.sayHi(), 3000);


// //bind function example
// let user2 = {
//   firstName: "Bilal",
//   lastName: "Ahmad",
//   fullName: function(){
//     return (this.firstName + " " + this.lastName );
//   }
// };
// let person2 ={
//   id: 1,
//   firstName: "Jenny",
//   lastName: "Lenny",
// };
// let fullnames = user2.fullName.bind(person2);
// console.log(fullnames())


// function(...args){
//   console.log(...args);
// }


// function LevelTwo() {
//     console.log("Inside Level Two!")
//  }

//  function LevelOne() {
//     LevelTwo()
//  }

//  function main() {
//     LevelOne()
//  }

//  main()


// let obj = {
//     fname: "Bilal",
//     sname: "Ahmad",
//     fullname: () => {
//         console.log(this.fname);
//         // function writing() {
//         //     console.log("My name is " + fname);
//         // }
//         // writing()
//     }

// }
// obj.fullname();


// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName());


// function parent(){
//     console.log(this);
//     console.log("1/////////////////////////////");
//     function child1(){
//         console.log(this);
//     }
    
//     const child2=()=>{
//         console.log(this);
//     }

//     let child3={
//         print: ()=>{
//             console.log(this);
//         }
//     }
//     child1();
//     console.log("2/////////////////////////////");
//     child2();
//     console.log("3/////////////////////////////");
//     child3.print();
// }
// parent();


