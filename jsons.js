// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     spouse: null
// };
// let json = JSON.stringify(student);  
// console.log(typeof json); // we've got a string!
// console.log(json);


// //JSON ignores functions(methods), symbbolic keys & values and properties 
// //that stores undefined
// let user = {
//     sayHi() { // ignored
//       alert("Hello");
//     },
//     [Symbol("id")]: 123, // ignored
//     something: undefined // ignored
// };
// console.log( JSON.stringify(user) ); //(empty object)

// //JSON.stringify can be applied to primitives as well.
// console.log(JSON.stringify(1));
// //check type
// console.log(typeof(JSON.stringify(1)));
// console.log(JSON.stringify('Bilal'));
// console.log(typeof(JSON.stringify('Bilal')));
// console.log(JSON.stringify(true));
// console.log(typeof(JSON.stringify(true)));
// console.log(JSON.stringify([1,2,3,4,5]));
// console.log(typeof(JSON.stringify([1,2,3,4,5])));

console.log("Shopping example: ")
let shopping = {
    pname: "Product 1",
    price: 3000,
    availability: false,
    description: {
        height: 13,
        width: 15
    },
    sizes: [20, 30, "medium", "large"]
}
let myobject = JSON.stringify(shopping);
console.log(shopping);
console.log(typeof (shopping));
console.log(myobject);
console.log(typeof (myobject));
console.log(myobject.length);
let pobject = JSON.parse(myobject);
console.log(pobject);
console.log(typeof (pobject));
console.log(pobject.availability);
console.log(pobject?.description?.width);