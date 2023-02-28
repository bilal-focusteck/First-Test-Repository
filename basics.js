//can update value of x but cannot redefine let x
let x= 10;
console.log(x);
x=11;
console.log(x);

//cannot update value of y and cannot redefine const y
const y= 10;
console.log(y);

//can update value of x and can redefine with var
//var is function scoped, let, const is blocked scope
var z= 10;
console.log(z);
z=11;
console.log(z);
var z =12
console.log(z);

//var value updated in block, let value can't be updated in block
var a = 10;
{
    var a = -10;
}
var b = a;
{
    var b = -20;
}

console.log(b);

