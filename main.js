// PROJECT: Dog Years
//This is my age
const myAge = 28;
// Using let since variable will change
let earlyYear = 2;
// multiply value by 10.5 and then save to variable
earlyYear *= 10.5;
//How to calculate laterYears
let laterYears = myAge - 2;
//Calculate the number of dog year
laterYears *= 4;
// check my work
console.log(`Early Years:${earlyYear}`);
console.log(`Later Years:${laterYears}`);
//Calculate my age in dog years
let myAgeInDogYears = earlyYear + laterYears;
//Turn my name to lower case
myName = "Dai".toLocaleLowerCase();
//display on console the statement
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
