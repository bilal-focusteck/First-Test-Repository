//empty array
function getEmptyArray() {
    const array = [];
    return array;
}
console.log(getEmptyArray());


//when using const with array then we can't re-define array but we 
//can change or make modification in array.
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

//count of items in array
function getNumberOfElements(elements) {
    return elements.length;
}
console.log(getNumberOfElements(['a', 'b', 'c'])); 
console.log(getNumberOfElements([])); 

//app variable is added to the apps array
function useApp(apps, app) {
    apps.push(app);
    return apps;
}
console.log(useApp(["Clock", "Twitter"], "Firefox"));
console.log(useApp([], "Safari"));

//return first elelment of array
function getFirstApp(apps) {
    return apps[0];
}
console.log(getFirstApp(["Chrome", "Clock", "Twitter"]));
console.log(getFirstApp(["Clock", "Contacts"]));

//return last element
function getlastApp(apps) {
    return apps[apps.length-1];
}
console.log(getlastApp(["Chrome", "Clock", "Twitter"]));
console.log(getlastApp(["Clock", "Contacts"]));

//array passing to a function & log on screen
const grades = [10, 8, 13, 14];
grades.forEach(function(grade) {
    console.log(grade*2);
});


//simple array iterations
function loopThroughElements(elements) {
    elements.forEach(function (elements)
    {
        console.log(elements);
    })
}
loopThroughElements(["Sam", "Charlie", "Alex"]);

//another function example
function logUserIds(userIds) {
    userIds.forEach(function (userIds){
        console.log(userIds);
    })       
}
logUserIds([10, 15, 14]);



const people = ["Sam", "Alex"];
people.forEach(function(person) { 
    console.log(person);
});

//sum of grades
function sumGrades(grades) {
    var sum =0;
    grades.forEach(function (grade){
        sum = sum + grade;
        
    })
    return sum;
}
console.log(sumGrades([15, 5, 10]));
console.log(sumGrades([12, 10, 13, 19]));

//implement all positive number sum
console.log("Implement all positive numbers sum");
function sumPositiveNumbers(numbers) {
    var sum =0;
    numbers.forEach(function (number){
        if(number > 0){
            sum = sum + number;
        }
    })
    return sum;
}
console.log(sumPositiveNumbers([15, -5, 10]));
console.log(sumPositiveNumbers([-3, 4, -2, 1]));

//sum of odd numbers
function sumOddNumbers(numbers) {
    var sum =0;
    numbers.forEach(function (number){
        if(number % 2 !=0){
            sum = sum + number;
        }
    })
    return sum;
}
console.log(sumOddNumbers([15, 5, 10]));
console.log(sumOddNumbers([2, 3, 4, 5, 6])); 
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); 

//array filter method (it behaves as a condition to get something
//from array specifically.)
//here function(number) to }); is callback function
//javascript will call it as many times as elements we have
const numbers = [9, 5, 14, 3, 11];
const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen);

//another example
const years = [2000, 2008, 2020, 2023];
years.filter(function(year) {
    return year >= 2010;
});





