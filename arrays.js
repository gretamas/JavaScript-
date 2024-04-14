
//Exercise1 
/*

const groceriesList = [
    { product: "milk", amount: 1, ifBought: "yes"},
    { product: "apple", amount: 4, ifBought: "no"},
    { product: "bread", amount: 2, ifBought: "no"},
    { product: "cheese", amount: 1, ifBought: "yes"},
    { product: "eggs", amount: 10, ifBought: "yes"},
];

const notBoughtItems = groceriesList.filter(item => item.ifBought === "no");
const boughtItems = groceriesList.filter(item => item.ifBought === "yes");

const newList = notBoughtItems.concat(boughtItems);

console.log(newList);
*/

//Exercise2

/*

function purchasing(purchase) {
    let existingItem = groceriesList.find(item => item.product === purchase);
    if (existingItem) {
        existingItem.amount++; 
        existingItem.ifBought = "yes"; 
        return groceriesList; 
    } else {
        let newItem = { product: purchase, amount: 1, ifBought: "yes" };
        return groceriesList.concat(newItem); 
    }
}

console.log(purchasing("milk"));

*/

//Exercise3

/*
const receipt = [
    { product: "milk", amount: 1, pricePerItem: 1.5},
    { product: "apple", amount: 4, pricePerItem: 0.4},
    { product: "bread", amount: 2, pricePerItem: 1.2},
    { product: "cheese", amount: 1, pricePerItem: 2},
    { product: "eggs", amount: 10, pricePerItem: 0.3},
];

function totalPrice() {
    let total = 0;
    receipt.forEach(item => {
        total += item.amount * item.pricePerItem;
    });
    return total;
}
 
console.log("Total sum of the purchse is: " + totalPrice());

function mostExpensive(a,b){
    return receipt.sort((a,b)  => b.pricePerItem - a.pricePerItem)[0];
}

console.log("The most expensive product is : " + mostExpensive().product);

function averagePricePerItem (receipt){
    let total = 0;
    let totalItems = 0;

    receipt.forEach(item => {
        total += item.pricePerItem * item.amount; 
        totalItems += item.amount; 
    });

    return (total / totalItems).toFixed(2); 
}

console.log("The average price of the product is: " + averagePricePerItem(receipt));

*/

//Exercise4
/*
const styles = [
    { name: "color", value: "blue" },
    { name: "font-size", value: "20px" },
    { name: "text-align", value: "center" },
    { name: "text-decoration", value: "underline" }
];

const stylesAttribute = styles.map(function (style){
    return `${style.name}: ${style.value}`;
});

const generatetext = function(text) {
    document.open();
    document.write(`<p style="${stylesAttribute.join("; ")}">${text}</p>`);
    document.close();
};

const text = "Hello, world!";
generatetext(text);

*/

//Exercise5

const classrooms = [
    { name: "classroom1", seats: 10, faculty: "maths"},
    { name: "classroom2", seats: 13, faculty: "english"},
    { name: "classroom3", seats: 20, faculty: "geography"},
    { name: "classroom4", seats: 16, faculty: "history"},
    { name: "classroom5", seats: 12, faculty: "history"},
    { name: "classroom6", seats: 11, faculty: "english"},
    { name: "classroom7", seats: 20, faculty: "maths"},
    { name: "classroom8", seats: 19, faculty: "maths"},
]

const displayClassrooms = classrooms.map(function(classroom,index) {
    return `${index + 1}. ${classroom.name}, Seats: ${classroom.seats}, Faculty: ${classroom.faculty}`;
});

const list = displayClassrooms.join('\n');
console.log(list);

const sortedByFaculty = {
    maths: [],
    english: [],
    history: [],
    geography: []
};

classrooms.forEach(classroom => {
    if (classroom.faculty === "maths") {
        sortedByFaculty.maths.push(classroom);
    } else if (classroom.faculty === "english") {
        sortedByFaculty.english.push(classroom);
    } else if (classroom.faculty === "history") {
        sortedByFaculty.history.push(classroom);
    } else if (classroom.faculty === "geography") {
        sortedByFaculty.geography.push(classroom);
    }
});

function displaylistByClassroom(faculty, classrooms) {
    console.log(`\n${faculty}`);
    classrooms.forEach((classroom, index) => {
        console.log(`${index + 1}. ${classroom.name}, Seats: ${classroom.seats}`);
    });
}


displaylistByClassroom("Maths classrooms", sortedByFaculty.maths);
displaylistByClassroom("English classrooms", sortedByFaculty.english);
displaylistByClassroom("History classrooms", sortedByFaculty.history);
displaylistByClassroom("Geography classrooms", sortedByFaculty.geography);


const group = [ {name: "group1", studentsNumber: 13, faculty: "maths"}]

const chooseClassroom = {
    possibleClassrooms: [],
};

classrooms.forEach(classroom => {
    
    if (classroom.faculty === "maths" && classroom.seats >= group[0].studentsNumber) {
        chooseClassroom.possibleClassrooms.push(classroom);
    }
});

console.log("Possible classrooms for a given group are: ");
chooseClassroom.possibleClassrooms.forEach((classroom, index) => {
    console.log(`${index + 1}. ${classroom.name}, Seats: ${classroom.seats}`);
});


function sortClassroomsBySeats(classrooms) {
    classrooms.sort((classroomA, classroomB) => {
        return classroomA.seats - classroomB.seats;
    });
}

const sortedListBySeats = sortClassroomsBySeats(classrooms);

sortClassroomsBySeats(classrooms);

console.log("Classrooms sorted by number of seats:");
classrooms.forEach((classroom, index) => {
    console.log(`${index + 1}. ${classroom.name}, Seats: ${classroom.seats}`);
});
