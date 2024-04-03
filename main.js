//Exercise 1
/*
let myName = prompt("Please enter your name:");

console.log("Hello, " + myName);

document.body.innerHTML = "<h2>Hello, " + myName + "</h2>"
*/


//Exercise 2
/*
let birthYear = prompt("Please enter yor year of birth:");

const currentYear= 2024;

const age = currentYear - birthYear;

console.log(age);

document.body.innerHTML = "<h2>Your age is " + age + " years old</h2>"
*/

//Exercise 3
/*
let sideLength = prompt("Please enter a square side length:");

const squarePerimeter= sideLength * 4;

console.log(squarePerimeter);

document.body.innerHTML = "<h2>Square perimeter is: " + squarePerimeter + " cm </h2>"
*/

//Exercise 4
/*
let circleRadius = prompt("Please enter a circle radius:");

const pi = 3.14;

const area = pi * circleRadius * circleRadius;

console.log(area);

document.body.innerHTML = "<h2>Circle area: " + area + "</h2>"
*/

//Exercise 5
/*
let distance = prompt("Please enter a distance between two cities (km):");

let time = prompt("Please enter a time within you want to cover a distance (h)");

const speed = distance/time;

console.log(speed);

document.body.innerHTML = "<h2>Speed needed to be on time: " + speed + " km/h </h2>"
*/

//Exercise 6
/*
const userName = prompt("Please enter your name:");

const age = prompt("Please enter your age:");

const birthPlace = prompt("Please enter your country of birth:");

console.log("%c userName", "color:green;");

console.log("%c age", "color:red;");

console.log("%c birthPlace", "color:blue;");
*/

//Exercise 7
/*
const userName = prompt("Please enter your name:");

const age = prompt("Please enter your age:");

const birthPlace = prompt("Please enter your country of birth:");

const city = prompt("Please enter your city of birth:");

let currentAddress = prompt("Please enter your current address:");

let postalCode = prompt("Please enter your postal code:");

let favouriteColor = prompt("Please enter your favourite color:");

let pet = prompt("do you have a pet (Yes/No):");

const gender = prompt("Please enter your gender:");

let car = prompt("Please enter your car model:");

alert(userName + ' ' + age  + ' ' +  birthPlace + ' ' +  city + ' ' +  currentAddress + ' ' +  postalCode + ' ' +  favouriteColor + ' ' +  pet + ' ' +  gender + ' ' +  car );
*/


//Exercise 8

/*

const birthYear= 2000;

countAge= ((2025 - birthYear) + ' ' + (2029 - birthYear) + ' ' + (2050 - birthYear));

console.log(countAge);

*/

//Challenges
//Exercise 1
/*
let amountInUSD = prompt("Please enter the amount in USD:");

const exchangeToEUR = amountInUSD * 0.93;

console.log(exchangeToEUR);

document.body.innerHTML = "<h2>Amount in EUR is: " + exchangeToEUR + "</h2>"
*/

//Exercise 2
/*
let memory = prompt("Please enter a flash drive memory in GB:");

const fileSize = 280;

const availableStorage = (memory * 1000)/ fileSize;

console.log(availableStorage);

document.body.innerHTML = "<h2>You can store: " + availableStorage + " files</h2>"
*/

//Exercise 3
/*
let money = prompt("Please enter an amount of money (EUR):");

let price = prompt("Please enter a chocolate price (EUR):");

const chocolatesNumber = money/price;

let chocolatesNumberRounded = Math.floor(chocolatesNumber);

let change = money - (chocolatesNumberRounded * price);

console.log(chocolatesNumberRounded);

console.log(change);

document.body.innerHTML = "<h2>You can buy: " + chocolatesNumberRounded + " chocolates</h2>"

document.body.innerHTML = "<h2>Your change is: " + change + " Eur</h2>"
*/

//Exercise 4
/*
let deposit = prompt("Please enter a sum of bank deposit for 2 months:");

const interest = deposit * 0.05;

console.log(interest);
*/
