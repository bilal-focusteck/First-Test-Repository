b=5;
var a=b=6;
console.log(a);
console.log(b);

var message = "hello";
message = 123456;
console.log(message)


let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); 

let x, y, z;

x = y = z = 2 + 2;

console.log( x );
console.log( y );
console.log( z );

console.log("new function")
let e = 1, r = 1;

console.log( ++e ); // 2, prefix form returns the new value
console.log( r++ ); // 1, postfix form returns the old value

console.log( e ); // 2, incremented once
console.log( r );

//ternary operator "? :"
let age = 52;
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);

let access = (age > 18) ? console.log("yes allowed") : (age <18) ? console.log("no brother"): console.log("bye bye")
console.log(access);

//Nullish coalescing operator '??' it checks null and return if get 
//value, "||" behaves the same way As of '??' but returns first true 
//value and '??' returns first exisitng value
let firstName = null;
let lastName = null;
let nickName = "found first exising element";
// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "hfdhf");

//"||" operator fid first true value
let fname = null;
let lname = "hello";
let nname = "Supercoder";

// shows the first truthy value:
console.log((fname || lname || nname || "hello"));

let height = 0;
console.log((height || 100)); // 100
console.log((height ?? 100)); // 0

// program to check pass or fail using TERNARY OPERATOR
//let marks = prompt('Enter your marks :');
let marks = 39;
let result = (marks >= 40) ? 'pass' : 'fail';
console.log(`You ${result} the exam.`);