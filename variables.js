//printing on ternminal
console.log("Hello!!!")
console.log(10+5);

//Variables:
var a=10
var b=10
var c= a+b
console.log(c)

var x=10;
var x="Updated value" //if we use let here, it will throw error, let never allow you to 
//update value
console.log(x);

let message;
message = 'Hello!';
console.log(message);

//Hoisting with var variables:
//we can't do hoising with let, it can't allow you to use variable before initialize it
var g=2;
var f = 3
z = f + g
var z;
console.log(z);

//String Concaatination:
let fname= "Bilal";
let lname = "Ahmad";
let fullname = fname + " " + lname;
console.log(fullname);

//type of variale or a value:
console.log(typeof("+"));
console.log(typeof(fullname));
console.log(typeof("Bilal"));
console.log(typeof(5));

//Adding number with string
//It treats number as string when adding number with a string
var adding = 10 + "Bilal" + 4;
console.log(adding);

//Const variables:
const pi=10;
// pi=15 not allowed
console.log(pi);
//when using const with array then we can't re-define array but we can
//change or make modification in array.
const array = ["Bilal", "Ahmad" , "Software Engineer", 24];
array[0] = "Billey"
array.pop();
array.pop();
array.push("Software Enginer");
array.push("Focusteck");
console.log(array);
//but we can't re deifne array as:
//array = ["Bilal", "Ahmad" , "Software Engineer", 24, Focusteck];

//Objects with const: we use objects with curly braces
//we can update but we cannot re define it 
const car = {name : "ALTIS", make : "Toyota", model : 2023}
console.log(car);
car.model = 2022;
console.log(car);
console.log(typeof(car));

//let is used inside of function only has blocked scope here,
//we cannot access a & b outside of function scope.
//var can be used globally.
function add(){
    let a =3+3;
    let b =4;
    var additionary = a+b ;
    return additionary
}
console.log(add());
