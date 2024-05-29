/*
const receipt = [
    { product: "milk", amount: 1, pricePerItem: 1.5},
    { product: "apple", amount: 4, pricePerItem: 0.4},
    { product: "bread", amount: 2, pricePerItem: 1.2},
    { product: "cheese", amount: 1, pricePerItem: 2},
    { product: "eggs", amount: 10, pricePerItem: 0.3},
];

const sumOfPurchase = receipt.reduce((total, item) =>total + (item.amount * item.pricePerItem), 0)

console.log("Total sum of the purchse is: " + sumOfPurchase);



const mostExpensiveProduct = [],

sortByPrice = receipt.sort((a, b) => b.pricePerItem - a.pricePerItem);

mostExpensiveProduct.push(sortByPrice[0]);

console.log(mostExpensiveProduct);


function averagePrice(receipt){
    let totalPrice = 0;
    for(let i = 0; i < receipt.length; i++){
        totalPrice += receipt[i].amount * receipt[i].pricePerItem;
    } 

    return totalPrice / receipt.length;
}

console.log(averagePrice(receipt));


const styles = [
    { name: "color", value: "blue" },
    { name: "font-size", value: "20px" },
    { name: "text-align", value: "center" },
    { name: "text-decoration", value: "underline" }
];


function displayElement(text){
    const createStyle = styles.map(style => `${style.name}: ${style.value}`).join(";");
    document.open();
    const createText = `<p style ="${createStyle}">"${text}"</p>`;
    document.write(createText);
    document.close();
}

console.log(displayElement("Hello"));
*/

/*
const classrooms = [
    { name: "abc", seats: 10, faculty: "maths"},
    { name: "akbsvk", seats: 13, faculty: "english"},
    { name: "clvjj", seats: 20, faculty: "geography"},
    { name: "jjhy", seats: 16, faculty: "history"},
    { name: "trfny", seats: 12, faculty: "history"},
    { name: "aaa", seats: 11, faculty: "english"},
    { name: "clgngnn", seats: 20, faculty: "maths"},
    { name: "qqq", seats: 19, faculty: "maths"},
]

//classrooms.forEach((classroom) => console.log(classroom));

function sortByFaculty (){
    let mathsClassrooms = classrooms.filter(classroom => classroom.faculty === "maths");
    let englishClassrooms = classrooms.filter(classroom => classroom.faculty === "english");
    let geographyClassrooms = classrooms.filter(classroom => classroom.faculty === "geography");
    let historyClassrooms = classrooms.filter(classroom => classroom.faculty === "history");
    
    return{
        mathsClassrooms,
        englishClassrooms,
        geographyClassrooms, 
        historyClassrooms,
    }
}

console.log(sortByFaculty());

const group = [ {name: "group1", studentsNumber: 13, faculty: "maths"}]

function chooseClassroom (studentsNumber, faculty){
    let displayClassrooms = [];

    const sort = classrooms.filter(classroom => classroom.seats >= studentsNumber && classroom.faculty === faculty);

    if(sort.length > 0){
      displayClassrooms.push(sort);
      return displayClassrooms;
    }else{
        return "There is no available classroom for a given group";
    }
};

console.log(chooseClassroom(13, "maths"));

function sortBySeats (){
    let sortedArray = classrooms.sort((a,b) => a.seats - b.seats);
    return sortedArray;
}

console.log(sortBySeats());

function sortByName (){
    let sortedNames = classrooms.map(classroom => classroom.name).sort();
    return sortedNames;
}

console.log(sortByName());

const fruits = [`kiwi`, `apple`,`kiwi`, `orange`, `kiwi`, `apple`];

function countFruit(){
  let counts = { "kiwi": 0, "apple": 0, "orange": 0};

  fruits.forEach(fruit => {
    if(fruit === "kiwi"){
        counts.kiwi++;
    }else if(fruit === "apple"){
        counts.apple++;
    }else if(fruit === "orange"){
        counts.orange++;
    }
  });
   return counts; 
};

console.log(countFruit());



function removeDuplicates(){
    let singleFruit = [];

    fruits.forEach(fruit => {
        if(!singleFruit.includes(fruit)){
            singleFruit.push(fruit)
        }
    })

    return singleFruit;
};

//console.log(singleFruit());



const students = [
    { name: "alex", age: 20},
    { name: "mike", age: 24},
    { name: "masha", age: 20},
    { name: "stas", age: 18},
]

function sortStudents(student){
    age18=[];
    age20=[];
    age24=[];

   students.forEach(student =>{
    if(student.age === 18){
        age18.push(student);
    }else if(student.age === 20){
        age20.push(student);
    }else if(student.age === 24){
        age24.push(student);
    }
   })
  return{
    age18,
    age20,
    age24,
  }
}

//console.log(sortStudents());

function groupStudents(){

    let grouped = [];

    students.forEach(student =>{
        if(!grouped[student.age]){
            grouped[student.age]=[student];
        }else{
            grouped[student.age].push(student);
        }
    })

   return grouped;
}

console.log(groupStudents());

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];

const sum = 10;

function findPairs(numbers){
  for(let i=0; i<numbers.length; i++){

  }
}



const rps = (p1, p2) => {
    if(p1 === p2){
      return "Draw!";
    }else if(p1=== "scissors" && p2==="paper" ||
            p1 === "rock" && p2==="scissors"||
            p1 === "paper" && p2==="rock"){
      return "Player 1 won!"
    }else{
      return "Player 2 won!"
    }
  };

  console.log(rps("scissors","paper"));

  const array = ['hello', 'world', 'this', 'is', 'great'];

function smash (array) {
  let newString = array.join(" ");
   return newString;
};

console.log(smash(array));

//Exercise3
/*
const playList = [
{
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
},
{
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
},
{
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
},
{
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
},
{
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
},
{
 author: "AC/DC",
 song:"BACK IN BLACK"
},
{
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
},
{
 author: "METALLICA",
 song:"ENTER SANDMAN"
}
];

const getBlock = document.querySelector(".container");

console.log(getBlock);

const songList = document.createElement("ol");

songList.classList.add("songlist");

getBlock.appendChild(songList);

for (var i = 0; i < playList.length; i++) {
let listItem = document.createElement("li");
let items=playList[i];
listItem.innerHTML = items.song + '</span> by ' + items.author;
songList.appendChild(listItem);
}
*/











