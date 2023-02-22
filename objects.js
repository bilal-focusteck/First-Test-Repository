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

let user = {
    name: "Bilal",
    fname: "Tauheed",
    age: 25
};
let admin = user;
admin.name = "Bilal Ahmad";
console.log(admin);
//copying data
let objA = {};
let objB = {};
let objC = {};
objC = Object.assign(objA,objB);
console.log(objA===objB);
console.log(objA===objC);

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


// function Car(make, model, color, owner){
//     this.make=make;
//     this.model=model;
//     this.color=color;
//     this.owner=owner;
// }
// const cars = new Car("Honda", 2022,"Black", "Bilal" );
// console.log(cars);
// for (loops in cars)
// {
//     console.log(cars[loops]);
// }


// //another method
// const MyCar = {
//     "make": "Honda",
//     "model": 2022,
//     "color": "Black",
//     "owner": "Bilal"
// };
// console.log(MyCar);
// Object.entries(MyCar).forEach(([key, value])=>{
//     console.log(key, value);
// })





//Objects example programs
// const course = {
//     title: "JavaScript",
//     lectures: 10,
//     sections: 5,
//     notes: {
//         notice: "Welcome to JavaScript",
//         timings: "Will be announced soon"
//     },
//     enroll(){
//         console.log("Youre Enrolled in JS");
//     }
// };
// console.log(course.lectures);
// console.log(course.notes.timings)
// console.log(course.enroll)
// console.log(course);

//using factory function
// function createobject(){
//     const course = {
//         title: "JavaScript",
//         lectures: 10,
//         sections: 5,
//         notes: {
//             notice: "Welcome to JavaScript",
//             timings: "Will be announced soon"
//         },
//         enroll(){
//             console.log("Youre Enrolled in JS");
//         }
//     };
//     return course;
// }
// const myobject = createobject();
// console.log(myobject.lectures);
// console.log(myobject.notes.notice);

//Constructor function
// function Course(title, lecture){
//     this.title = title,
//     this.lecture = lecture,
//     this.enroll = function (){
//         console.log("Welcome to JavaScript Training");
//     }
// };
// const course = new Course("JavaScript, 10");
// // console.log(course);
// course.enroll();
// course.checkenrollment = function(){
//     console.log("There are thirty students in the class");
// }
// course.checkenrollment();
// //delete a property in object
// //delete course.title;
// console.log(course);

//using spread function to copy
//it won't effect copying object when you make change in copied object
// const car = {
//     title: "Honda",
//     model: 2022,
//     engine:"1300cc",
//     print(){
//         console.log("This is my car");
//     }
// }
// const obj = {...(car)};
// obj.print();
// console.log(obj);
// obj.model=2020;
// console.log(obj);
// console.log(car.model);

//object assign is also used to copy objects, changes will only be 
//reflected in changed object
// const cars = {
//     name: "Honda City",
//     model: 2022,
//     engine: "1300cc",
//     myfunction(){
//         console.log("This is Bilal's car");
//     }
// }
// for (let obj in cars){
//     console.log(obj, cars[obj]);
// }
// //clonning using for loop
// console.log("copy using array");
// const myobject_1={};
// for (let obj in cars){
//     myobject_1[obj]= cars[obj];
// }
// console.log(myobject_1);
// console.log("copied using array");
// const myobject = Object.assign({}, cars);
// console.log(myobject);
// console.log(myobject.engine);
// console.log(cars.engine);
// myobject.engine = "2000 cc";
// console.log(myobject.engine);

