//function with parameter
var a = 10;
var b = 20;
function add(a,b)
{
    let sum = a+b;
    return sum;
}
console.log(add(a,b));

//function within function

function addition()
{
    var a = 5;
    var b = 5;
    function calculate(a,b)
    {
        let sum = a+b;
        return sum;
    }
    var x = calculate(a,b);
    return x;
}
console.log(addition());

// find square of number
function square(number)
{
    var x = number * number;
    return x;
}
console.log(square(2));
console.log(square(3));
console.log(square(4));

//functon
function sum(a, b) {
    return a+b;
}
console.log(sum(1, 3));
console.log(sum(2, 5));

//functon
function multiply(a, b) {
    return a*b;
}
console.log(multiply(2, 4));
console.log(multiply(3, 2));

//string length
console.log("Letters counting")
function getCharCount(str) {
    return str.length;
}
console.log(getCharCount("Sam")); 
console.log(getCharCount("Alex 123")); 
console.log(getCharCount("Charley is here")); 

//to upper case
function shoutMyName(name) {
    return name.toUpperCase()
}
console.log(shoutMyName("Sam")); // "SAM"
console.log(shoutMyName("Charley")); // "CHARLEY"
console.log(shoutMyName("alex")); // "ALEX"

//to lower case
function lowerName(name) {
    return name.toLocaleLowerCase();
}
console.log(lowerName("Sam")); 
console.log(lowerName("ALEX")); 

console.log("IndeX Positions")
//index Positions
function getFirstCharacter(name) {
    return name[0]
}
console.log(getFirstCharacter("Amsterdam")); 
console.log(getFirstCharacter("Japan")); 

//last index
function getLastCharacter(name) {
    return name[name.length-1]
}
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"

//substring function
console.log("Substring functions");
function skipFirstCharacter(text) {
    return text.substring(1)
}
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"

function skipFirstCharacters(text) {
    return text.substring(1,3);
}
console.log(skipFirstCharacters("Xcode")); // "code"
console.log(skipFirstCharacters("Hello")); // "ello"

//first ten letters returning
function getDescription(text) {
    return text.substring(0,10);
}
console.log(getDescription("Hello my name is Bilal Ahmad"));
console.log(getDescription("i am software engineer by profession"));

//string concatination
function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial + lastNameInitial;
}
console.log(concatInitials("J", "D")); // "JD"
console.log(concatInitials("S", "B")); // "SB"

//substring using string concatination
function getDescriptionmy(text) {
    console.log(text);
    return text.substring(0,10) + "...";
}
console.log(getDescriptionmy("hello there my name is bilal"));

//string interpolation
function getFullName(firstName, lastName) {
    return (`${firstName} ${lastName}`);
}
console.log(getFullName("Bilal" , "Ahmad"));

//just first letter capital
function capitalizeme(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
console.log(capitalizeme("sam")); 
console.log(capitalizeme("ALEX")); 
console.log(capitalizeme("chARLie"));


//function using conditions
var aged = 19;
function canVote(aged) {
    if (aged >= 18) {
        return true;
    } else {
        return false;
    }
}

//if its empty string then return 0
agge="15";
function getNextAge(agge) {
    if (agge === "")
    {
        return 0;
    }
    else{
        return Number.parseInt(agge,10)+1
    }
}


