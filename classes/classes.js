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

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.read = function () {
        console.log(`You have read "${this.title}" by ${this.author}, which has ${this.pages} pages.`);
    };
}

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 342);
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




