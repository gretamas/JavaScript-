//Exercise1 
/*
const a = parseFloat(prompt("Please enter a first number")); // 
const b = parseFloat(prompt("Please enter a second number")); // 


function result(a,b){
    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
}

console.log(result(a,b));

*/

//Exercise2
/*
const a = parseFloat(prompt("Please enter a number")); 

function factorial(a){
    let result = 1; 
    for(let i = 2; i <= a; i++){ 
        result *= i; 
    }
    return result; 
}

console.log(factorial(a));
*/

//Exercise3
/*
const a = parseInt(prompt("Please enter the first digit")); 
const b = parseInt(prompt("Please enter the second digit")); 
const c = parseInt(prompt("Please enter the third digit")); 

function digitsTogether (a, b, c) {
    return parseInt(`${a}${b}${c}`);
}

const result= digitsTogether(a,b,c);
console.log("Concatenated number:", result);
*/

//Exercise4
/*
const w = parseInt(prompt("Please enter a width of a rectangle")); 
const l = parseInt(prompt("Please enter a lenght of a rectangle")); 

function area (w,l){
    if(w>l || l>w){
        return l * w;
    }else if(w === l){
        return w ** 2;
    }
}

const result = area(w,l);
console.log("Area is equal to:", result)

//Or another way if we don not to request those digits

function calculateArea(width, length = null) {
    if (length === null) {
        length = width;
    }
    return width * length;
}
*/

//Exercise5
/*
const a = parseInt(prompt("Please enter a number")); 

function checkNumber(a) {
    let divisorsSum = 0; 

    for (let i = 1; i < a; i++) {
        if (a % i === 0) {
            divisorsSum += i; 
        }
    }

    if (divisorsSum === a) {
        console.log("The entered number is perfect");
    } else {
        console.log("The entered number is not perfect");
    }
}

checkNumber(a); 

*/

//Exercise6

//Exercise7
/*
function formatTime(hours, minutes, seconds = 0) {
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
*/
 
//Exercise8
/*
function timeinSeconds(hours, minutes, seconds = 0) {
    const hoursToSeconds= hours * 3600;
    const minutesToSeconds = minutes * 60;
    const result = hoursToSeconds + minutesToSeconds + seconds;
    return result;
}
*/

//Exercise9
/*
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSecondsAfterHours = seconds % 3600;
    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const remainingSeconds = remainingSecondsAfterHours % 60;
    
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
    
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

const seconds = 5145;
console.log(formatTime(seconds));
*/

//Exercise10
/*
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSecondsAfterHours = seconds % 3600;
    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const remainingSeconds = remainingSecondsAfterHours % 60;
    
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
    
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function differenceBetweenDates(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    const totalSecondsDate1 = hours1 * 3600 + minutes1 * 60 + seconds1;
    const totalSecondsDate2 = hours2 * 3600 + minutes2 * 60 + seconds2;
    const differenceInSeconds = Math.abs(totalSecondsDate1 - totalSecondsDate2);
    return formatTime(differenceInSeconds);
}

*/
