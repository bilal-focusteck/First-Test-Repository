// let salaries = {
//     John: 100, //key and value pair
//     Ann: 160,
//     Pete: 130
// }; 
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }  
// console.log(sum); // 390

// let users = {
//     name:"Bilal",
//     sname: "Ahmad",
//     profession: "Softwarwe Engineer"
// };
// for (let key in users){
//     console.log(users[key]);
// }

// let codes = {
//     "44": "Australia",
//     "1": "US",
//     "+92": "Pakistan",
//     "+91": "India"
// };
// for (let code in codes){
//     console.log(codes[code]);
// }

// //assigning value

// let user = {
//     name: "Bilal",
//     fname: "Tauheed",
//     age: 25
// };
// let admin = user;
// admin.name = "Bilal Ahmad";
// console.log(admin);
// //copying data
// let objA = {abc:"abc"};
// let objB = {def:"def"};
// let objC = {};
// objC = Object.assign(objA,objB);
// console.log({objA});
// console.log({objC});

// //cloning examples
// let obj = {
//     key1: "value1",
//     key2: "value2"
// };
// let clonedObject = Object.assign({}, obj);
// console.log(clonedObject);

// //calculator function
// function Calculator(a,b){
//     this.read = function(){
//         this.a=a;
//         this.b=b;
//     }
//     this.sum = function(){
//         return this.a+this.b;
//     }
//     this.mul = function(){
//         return this.a*this.b;
//     }
// };
// let calculator = new Calculator(2,3);
// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());

// //objects can store a function as it's property
// let john = {
//     name: "John",
//     sayHi: function() {
//       console.log("Hi buddy!");
//     }
// };
// john.sayHi();


function Car(make, model, color, owner){
    this.make=make;
    this.model=model;
    this.color=color;
    this.owner=owner;
}
const cars = new Car("Honda", 2022,"Black", "Bilal" );
console.log(cars);
for (loops in cars)
{
    console.log(cars[loops]);
}


//another method
const MyCar = {
    "make": "Honda",
    "model": 2022,
    "color": "Black",
    "owner": "Bilal"
};
console.log(MyCar);
Object.entries(MyCar).forEach(([key, value])=>{
    console.log(key, value);
})