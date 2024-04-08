//Exercise1
/*

let number = parseInt(prompt("Please enter a number:"));

let sum= 0;

for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log("The summation of numbers from 1 to", number, "is:", sum);
*/

//Exercise2
/*

let number1 = parseInt(prompt("Please enter first number"));
let number2 = parseInt(prompt("Please enter second number"));
let largestDivisor = 1;

for (let i = 1; i <= Math.min(number1, number2); i++) {
    if (number1 % i === 0 && number2 % i === 0) {
        largestDivisor = i;
    }
}

console.log("The largest common divisor is:", largestDivisor);
*/

//Exercise3
/*
let number = parseInt(prompt("Please enter a number"));

let divisors = '';

for(let i = 1; i<=number; i++) {
    if(number % i === 0 ){
        divisors= i;
        console.log(divisors)
    }
}
*/

//Exercise4
/*
let number = parseInt(prompt("Please enter a number"));

const convertString = number.toString();

let counter = 1;

while(counter<= convertString.length) {
    counter ++;
    console.log(counter)
}
*/

//Exercise5
/*
let positive = 0;
let negative = 0;
let zero = 0;
let odd = 0;
let even = 0;

for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Please enter 10 numbers:"));

if(number > 0){
    positive++;
}else if(number< 0){
    negative++
}else{
    zero++
}

if(number % 2 === 0){
    even++
}else{
    odd++
}
}

console.log("Positive:", positive);
console.log("Negative:", negative);
console.log("Zero:", zero);
console.log("Odd:", odd);
console.log("Even:", even);
*/

//Exercise6
/*
let fruit = prompt("Please enter your favourite fruit:");

if (fruit === "Peach" || fruit === "Banana" || fruit === "Apple") {
    console.log(fruit + " is my favourite fruit");
} else if (fruit === "Pear" || fruit === "Grapefruit") {
    console.log("I hate " + fruit );
} else {
    console.log("I have not tried " + fruit );
}

*/

//Exercise7
/*
let number = parseInt(prompt("Please enter a number"));

switch (true) {
    case (number === 0):
        console.log("The number is zero");
        break;
    case (number % 2 === 0):
        console.log("The number is even");
        break;
    case (number % 2 !== 0):
        console.log("The number is odd");
        break;
    default:
        console.log("Invalid input");
}
*/

//Challenges
//Exercise1
/*
let proceed = true;

while (proceed){
let a = parseInt(prompt("Please enter first number"));
let b = parseInt(prompt("Please enter second number"));
let sign = prompt("Please enter a sign");

const summation = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = a / b;

if(sign === "+"){
    console.log(summation)
}else if(sign === "-"){
    console.log(subtraction)
}else if(sign === "*"){
    console.log(multiplication)
}else if(sign === "/"){
    console.log(division)
}else {
    console.log("Invalid sign entered.");
}

let response = prompt("Do you want to make another calculation? yes/no");

    if (response !== "yes") {
        proceed = false;
    }

}
*/

//Exercise2

//Exercise3
/*
let day = prompt("Please enter a week day");

let proceed = true;

let response = prompt("Would you like to see the next one? yes/no");

 if (response !== "yes") {
        proceed = false;
    }

while (proceed){
    if(day === "Monday"){
        console.log("Tuesday")
    }else if(day === "Tuesday"){
    console.log("Wednesday")
    }else if(day === "Wednesday"){
        console.log("Thursday")
    }else if(day === "Thursday"){
        console.log("Friday")
    }else if(day === "Friday"){
        console.log("Saturday")
    }else if(day === "Saturday"){
        console.log("Sunday")
    }else if(day === "Sunday"){
        console.log("Monday")
    }

    response = prompt("Would you like to see the next one? (yes/no)");

    if (response !== "yes") {
        proceed = false;
    }

    if (proceed) {
        day = prompt("Please enter the next week day:");
    }
}
*/

//Exercise3
/*
let number, multiplier, result;

for (let i = 2; i <= 9; i++) {
    number = i;
    console.log(`Multiplication table for ${number}:`);
    for (let x = 1; x <= 10; x++) {
        multiplier = x;
        result = number * multiplier;
        console.log(`${number} multiplied by ${multiplier} is equal to ${result}`);
    }
    console.log('\n');
}
*/

//Exercise4












