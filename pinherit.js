//Prototypal Inheritacne
// let animal = {
//     eats: true,
//     walk(){
//         console.log("Animals can walk")
//     }
// };
// let cat = {
//     __proto__: animal,
//     sleep:true
// };
// cat.walk();
// console.log(cat.eats);


// let animal = {
//     eats: true,
//     walk() {
//       console.log("Animals can walk");
//     }
//   };  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
//   let longEar = {
//     earLength: 10,
//     __proto__: rabbit
//   };
//   // walk is taken from the prototype chain
//   longEar.walk(); // Animal walk


// let animal = {
//     eats: true,
//     walk() {
//       console.log("This is animal that can walk");
//     }
// };
// let rabbit = {
//     __proto__: animal
// };
// rabbit.walk();  
// console.log("Changing the function");
// rabbit.walk = function() {
//     console.log("Rabbit Bounce-bounce!");
// };
// rabbit.walk();


// let user = {
//     name: "Bilal",
//     sname: "Ahmad",
//     set fullName(myname) {
//         [this.name, this.sname] = myname.split(" ");

//     },
//     get fullName() {
//         return `${this.name} ${this.sname}`;
//     }
// };
// let admin = {
//     __proto__: user,
// };
// console.log(admin.fullName);
// admin.fullName = "Ahmad Bilal";
// console.log(admin.fullName);
// console.log(user.fullName);


//using for in to iterate keys
// let animal = {
//     eats: true
// };

//   let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

//   // Object.keys only returns own keys
// console.log(Object.keys(rabbit)); 

//   // for..in loops over both own and inherited keys
// for(let prop in rabbit) {
//     console.log(prop); 
// }


//Object..hasOwnProperty(prop) returns own property
// let animal = {
//     eats: true
// };  
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

//   for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);

//     if (isOwn) {
//       console.log(`Own: ${prop}`); 
//     } else {
//         console.log(`Inherited: ${prop}`); 
//     }
//   };

// function rabbit(name) {
//     this.name = name;
//     console.log(name);
// };
// let obj = new rabbit("White Rabbit");
// let obj2 = new rabbit("Black Rabbit");

// obj.name
