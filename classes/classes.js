//Homework1

//Exercise1 

function createPerson (name, age, job){
    return{
        name: name,
        age: age,
        job: job,

        displayMessage: function (){
            return (`This is ${this.name} who is ${this.age} years old and works as a ${this.job}`); 
        },
    };
};

const person1 = createPerson("John", 34, "doctor");

console.log(person1.displayMessage());

//Exercise2

function generateBankAccount(accountNumber, accountHolder, balance) {
    return {
        accountNumber: accountNumber,
        accountHolder: accountHolder,
        balance: balance,

        depositingFunds: function(amountToDeposit) {
            this.balance += amountToDeposit;
            console.log(`Balance after deposit is: ${this.balance}`);
        },

        withdrawingFunds: function(amountToWithdraw) {
            this.balance -= amountToWithdraw;
            console.log(`Balance after withdraw is: ${this.balance}`);
        }
    };
};

const account = generateBankAccount(123456789, "Mike", 3000);
account.depositingFunds(500); 
account.withdrawingFunds(200); 

//Exercise3

function Animal(species, name, sound) {
    this.species = species;
    this.name = name;
    this.sound = sound;

    this.makeSound = function () {
        console.log(`${this.species} ${this.name} says ${this.sound}`);
    };
}

const animal1 = new Animal("cat", "Alex", "meow");

animal1.makeSound(); 

//Exercise4

function Book1(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.read = function () {
        console.log(`You have read "${this.title}" by ${this.author}, which has ${this.pages} pages.`);
    };
}

const book1 = new Book1("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 342);
book1.read(); 

//Exercise5

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Greta", 14, 8);
student1.study(); 

//Homework2

//Exercise1

class Shape {
    constructor(){

    }

    getArea(){

    }

}

class Rect extends Shape{
    constructor(width, height){
        super();
        this.width=width;
        this.height= height;
    }

    getArea(){
        return this.width * this.height;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius; 
    }

    getArea(){
        return this.radius * 2 * Math.PI;
    }
}

const rect1 = new Rect(6,4);
const circle1 = new Circle(2);

console.log(rect1.getArea());
console.log(circle1.getArea());

//Exercise2

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    applyDiscount(discountPercentage) {
        this.price -= this.price * (discountPercentage / 100);
    }

    getDetails() {
        return `Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
    }
}


class Book extends Product {
    constructor(name, price, author, genre) {
        super(name, price);
        this.author = author;
        this.genre = genre;
    }

    getDetails() {
        return `${super.getDetails()}, Author: ${this.author}, Genre: ${this.genre}`;
    }
}


class Electronics extends Product {
    constructor(name, price, brand, warranty) {
        super(name, price);
        this.brand = brand;
        this.warranty = warranty; 
    }

    getDetails() {
        return `${super.getDetails()}, Brand: ${this.brand}, Warranty: ${this.warranty} years`;
    }
}

class Clothing extends Product {
    constructor(name, price, size, material) {
        super(name, price);
        this.size = size;
        this.material = material;
    }

    getDetails() {
        return `${super.getDetails()}, Size: ${this.size}, Material: ${this.material}`;
    }
}

const book = new Book("The Great Gatsby", 15.99, "F. Scott Fitzgerald", "Fiction");
const laptop = new Electronics("Laptop", 999.99, "Dell", 2);
const tshirt = new Clothing("T-Shirt", 19.99, "M", "Cotton");

console.log(book.getDetails());
console.log(laptop.getDetails());
console.log(tshirt.getDetails());

book.applyDiscount(10);
laptop.applyDiscount(20);
tshirt.applyDiscount(15);

console.log("After applying discounts:");
console.log(book.getDetails());
console.log(laptop.getDetails());
console.log(tshirt.getDetails());

//Exercise3

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log("animal sound");
    }

    getDetails() {
        return `Name: ${this.name}, Species: ${this.species}`;
    }
}


class Mammal extends Animal {
    constructor(name, species) {
        super(name, species);
    }

    makeSound() {
        console.log("Mammal sound");
    }
}

class Bird extends Animal {
    constructor(name, species) {
        super(name, species);
    }

    makeSound() {
        console.log("Bird chirping");
    }
}

class Reptile extends Animal {
    constructor(name, species) {
        super(name, species);
    }

    makeSound() {
        console.log("Reptile hiss");
    }
}


const elephant = new Mammal("Dodo", "Elephant");
const parrot = new Bird("Polly", "Parrot");
const snake = new Reptile("Sleve", "Snake");

console.log(elephant.getDetails());
elephant.makeSound();

console.log(parrot.getDetails());
parrot.makeSound();

console.log(snake.getDetails());
snake.makeSound();


