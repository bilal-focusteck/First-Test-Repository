//simple class exaxmple without constructor
// class Myform {
//     fill(name, busno) {
//         this.name = name;
//         this.busno = busno;
//         console.log("Your form is filled with name: " + this.name + " for the seat number: " + this.busno);
//     }
//     Submit() {
//         console.log("Your form is submitted with name: " + this.name + " for the seat number: " + this.busno);
//     }
//     cancel() {
//         console.log("Your form is calcelled with name: " + this.name + " for the seat number: " + this.busno);
//     }
// };
// let firstform = new Myform();
// firstform.fill("Bilal", 123);
// firstform.Submit();
// firstform.cancel()
// let secondform = new Myform();
// secondform.fill("Billey", 321);
// secondform.Submit();
// secondform.cancel();
// secondform.busno = 9630;
// secondform.Submit();


//with constructor method
// class Myform {
//     constructor(name, busno){
//         this.name = name;
//         this.busno = busno;
//     }
//     fill() {
//         console.log("Your form is filled with name: " + this.name + " for the seat number: " + this.busno);
//     }
//     Submit() {
//         console.log("Your form is submitted with name: " + this.name + " for the seat number: " + this.busno);
//     }
//     cancel() {
//         console.log("Your form is calcelled with name: " + this.name + " for the seat number: " + this.busno);
//     }
// };
// let firstform = new Myform("Bilal", 123);
// firstform.fill();
// firstform.Submit();
// firstform.cancel()
// let secondform = new Myform("Billey", 9630);
// secondform.fill();
// secondform.Submit();
// secondform.cancel();
// secondform.name = "Abdullah";
// secondform.fill();
// secondform.cancel();


//using getter and setter
// class User {
//     constructor(name) {
//         // invokes the setter
//         this.name = name;
//     }
//     set name(name) {
//         if (name.length < 5) {
//             console.log("Name is too short.");
//             return;
//         }
//         this._name = name;
//     }
//     get name() {
//         return this._name;
//     }
// }
// let user = new User("Bilal");
// console.log(user.name);
// user = new User("Bill");

// class emp{
//     constructor (n,a){
//         this.name = n;
//         this.age = a;
//     }
//     msg(){
//         console.log("Get Info after me");
//     }
// }
// class manager extends emp{
//     constructor (n,a,d){
//         super(n,a);
//         this.dept = d;
//     }
//     info(){
//         super.msg(); 
//         console.log(this.name + " is manager of department: " + this.dept);
//     }
// }
// let obj = new manager("Bilal",20, "Web Development");
// console.log(obj);
// // obj.msg();
// obj.info();
// console.log(obj.age);


//public and private
// class emp{
//     #name = "";
//     constructor(n){
//         this.#name = n;
//     }
//     #prifunc(){
//         return this.#name;
//     }
//     pubfun(){
//         return this.#name;
//     }
// }
// let obj = new emp("Bilal");
// console.log(obj.pubfun());


//accessing data of object inside a class
let methods = {
    sayHi(){
        console.log("This is Hy Message");
    },
    sayBye(){
        console.log("This is Bye Message");
    }
}
class myclass {
    constructor(v){
        this.value = v;
    }
}
let cobj = new myclass(10);
console.log(cobj);
Object.assign(myclass.prototype, methods);
cobj.sayHi();
cobj.sayBye();