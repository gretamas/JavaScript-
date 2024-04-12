//Exercise1
/*
const car = {
    manufacturer: "Toyota",
    model: "Yaris",
    releaseYear: 2022,
    averageSpeed: 70,
     info() {
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Model: ${this.model}`);
        console.log(`Release Year: ${this.releaseYear}`);
        console.log(`Average Speed: ${this.averageSpeed} km/h`);
    },
    timeCounter(distance){
        const timeWithoutBreaks = Math.floor(distance / this.averageSpeed);
        if (timeWithoutBreaks >= 4) {
            const breaks = Math.floor(timeWithoutBreaks / 4);
            return timeWithoutBreaks + breaks;
        } else {
            return timeWithoutBreaks;
        }
    }
};

*/

//Exercise2
/*

function largestDivisor(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

const fraction = {
    numerator1: 0,
    numerator2: 0,
    denominator1: 1,
    denominator2: 1,

    addition() {
        if (this.denominator1 === this.denominator2) {
            return "Numerator is: " + (this.numerator1 + this.numerator2) + ", Denominator is: " + this.denominator1;
        } else {
            return "Numerator is: " + (this.numerator1 * this.denominator2 + this.numerator2 * this.denominator1) + ", Denominator is: " + (this.denominator1 * this.denominator2);
        }
    },
    subtraction(){
        if (this.denominator1 === this.denominator2){
            return "Numerator is: " + (this.numerator1 - this.numerator2) + ", Denominator is: " + this.denominator1;
        }else{
        return "Numerator is: " + (this.numerator1 * this.denominator2 - this.numerator2 * this.denominator1) + ", Denominator is: " + (this.denominator1 * this.denominator2);
        }
    },
    multiplication(){
        return "Numerator is: " + (this.numerator1 * this.numerator2 ) + ", Denominator is: " + (this.denominator1 * this.denominator2);
    },
    division(){
        return "Numerator is: " + (this.numerator1 * this.denominator2 ) + ", Denominator is: " + (this.numerator1 * this.denominator1);
    },
    simplifyFraction({ numerator, denominator }) {
        const divisor = largestDivisor(numerator, denominator);
        return { numerator: numerator / divisor, denominator: denominator / divisor };
    }
}


const fraction1 = { ...fraction, numerator1: 1, denominator1: 4, numerator2: 2, denominator2: 4 };

console.log(fraction1.addition());
console.log(fraction1.subtraction());
console.log(fraction1.multiplication());
console.log(fraction1.division());
*/

//Exercise3

/*
const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    
    displayTime() {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    },

    changeSeconds(addSeconds) {
        this.seconds += addSeconds;
        if (this.seconds >= 60) {
            const extraMinutes = Math.floor(this.seconds / 60);
            this.seconds %= 60;
            this.minutes += extraMinutes;
        }
    },
    changeMinutes(addMinutes) {
        this.minutes += addMinutes;
        if (this.minutes >= 60) {
            const extraHours = Math.floor(this.minutes / 60);
            this.minutes %= 60;
            this.hours += extraHours;
        }
    },
    changeHours(addHours){
        this.hours += addHours;
        if (this.hours > 24){
            this.hours = (this.hours + amount) % 24;
        }
    }
};

time.hours = 18;
time.minutes = 30;
time.seconds = 30;

console.log("Initial time:", time.displayTime());

time.changeMinutes(40);
console.log("Time after adding 40 minutes:", time.displayTime());

*/

//Exercise4
/*
const dogs = [
    { name: "John", id: 1, age: 2, address: "1 First St" },
    { name: "Ivan", id: 2, age: 6, address: "2 Second St" },
    { name: "Teddy", id: 3, age: 7, address: "3 Third St" },
    { name: "Rocco", id: 4, age: 4, address: "4 Fourth St" },
    { name: "Sparky", id: 5, age: 9, address: "6 Fifth St" }
];


dogs.sort(function(a, b) { 
    return b.age - a.age 
}) 

console.log("The oldest dog is: " + dogs[0].name);
console.log("The youngest dog is: " + dogs[4].name);

//Exercise5

for (let key in dogs) {
    console.log(dogs[key]);
}
*/

//Exercise6

/*

const person1 = {
    name: "Joye",
    age: 20,
    talk() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old. Nice to meet you!`;
    }
};

const person2 = {
    name: "Rachel",
    age: 30,
    talk() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old. Nice to meet you!`;
    }
};


console.log(person1.talk());
console.log(person2.talk());

*/

//Exercise7
/*
const bigCircle = {
    radius: 0,
    calculateArea() {
        return Math.PI * (this.radius ** 2);
    }
};

const smallCircle = {
    radius: 2,
};

const smallCircleArea = bigCircle.calculateArea.bind(smallCircle);

console.log("Area of the small circle:", smallCircleArea());

*/

//Exercise8 and //Exercise9
/*
const dog = {
    dogName: "Alex",
    age: 3,
    color: "black",
    owner: "John",
};

Object.freeze(dog);

*/

