//Exercise1
/*
let userName = prompt("Please enter a username:");

const greetingMessage = `Hello, ${userName}! Welcome to our website.`;

console.log(greetingMessage);
*/

//Exercise2
/*
const child1Name = prompt("Please enter a first child name");

const child2Name = prompt("Please enter a second child name");

const child1Age = prompt("Please enter a first child age");

const child2Age = prompt("Please enter a second child age");

console.log(child1Age > child2Age);

console.log(child1Name == "Tim");
*/

//Exercise3
/*
let color = prompt("Please enter a color");

const flagColor1 = "red";

const flagColor2 = "green";

const flagColor3 = "black";

const flagColor4 = "blue";

const flagColor5 = "yellow";

console.log(color == flagColor1 || color == flagColor2 ||color == flagColor3 || color == flagColor4 || color == flagColor5);
*/

//Exercise4
/*
let number = prompt("Please enter a number");

console.log(number%2 == 1);
*/

//Exercise5
/*
let number1 = prompt("Please enter a first number");

let number2 = prompt("Please enter a second number");

const result = Math.floor(number1/number2);

console.log(result);
*/

//Exercise6
/*
const birthYear = prompt("Please enter your birth year");

const age = 2024 - birthYear;

console.log(age >= 18);
*/

//Exercise7
/*
let emptyValue;

console.log(typeof emptyValue);
*/

//Exercise8
/*
let number = prompt("Please enter a number");

console.log(typeof number);

console.log(number >= 10 && number <= 50);
*/

//Challenges
//Exercise1
/*
let userInput = prompt("Please enter a hree-digit number");

console.log((userInput[0] === userInput[1] || userInput[0] === userInput[2] || userInput[1] === userInput[2]));
*/

//Exercise2
/*
let userInput = prompt("Please enter a five-digit number:");

console.log(userInput[0] === userInput[4] && userInput[1] === userInput[3]);
*/

//Exercise3
/*
// Currency conversion rates (1 USD to other currencies)
const conversionRates = {
    "EUR": 0.83,
    "SEK": 8.77,
    "AUD": 1.29,
};

let inputUSD = parseFloat(prompt("Please enter an amount in USD"));

let currency = prompt("Please enter a desired currency: EUR/SEK/AUD");

function convertCurrency(inputUSD, currency) {
    if (conversionRates[currency]) {
        return inputUSD * conversionRates[currency];
    } else {
        return "Currency not supported.";
    }
}

let result = convertCurrency(inputUSD, currency);

console.log(result);
*/

//Exercise4
/*
let length = prompt("Please enter a length of a circumference");

let perimeter = prompt("Please enter a a perimeter of a square");

const diameter = length / 3.14; // it is equal to square side

const squareSide = perimeter / 4;

if (squareSide >= diameter) {
    console.log("The circumference can fit inside the square");
} else {
    console.log("The circumference cannot fit inside the square");
}
*/


