
//Exercise1
/*
const ageInput = parseInt(prompt("Please enter your age"));

if (ageInput < 18){
    const msg = "You are underaged";
     alert(msg);
}else{
    const drinksBlock = document.querySelector(".container");
    const drinksList = document.createElement("ul");
    drinksList.insertAdjacentHTML(
    `afterbegin`,

    `<h2>Our Drinks<h2>
    <li>Beer - 2$</li>
    <li>Wiskey - 5$</li>
    <li>Wine - 8$</li>`
 );

 drinksBlock.appendChild(drinksList);
}

*/

//Exercise2
/*
//document.addEventListener("DOMContentLoaded", function() {
const getBlock = document.querySelector(".container");

console.log(getBlock);

const namesList = document.createElement("ul");

getBlock.append(namesList);

namesList.className = "list";
namesList.insertAdjacentHTML(
    "afterbegin",
    `
    <li class="item">Dave</li>
    <li class="item">John</li>
    <li class="item">Ivan</li>
    <li class="item">Sam</li>
    <li class="item">Mel</li>
    <li class="item">Diana</li>`
);

namesList.insertAdjacentHTML(
   "afterbegin",
   `
   <li class="item">Smith</li>
   <li class="item">Jeff</li>
   <li class="item">Larry</li>`
);

namesList.insertAdjacentHTML(
   "beforeend",
   `
   <li class="item">Smith</li>
   <li class="item">Jeff</li>
   <li class="item">Larry</li>`
);

function findMiddleItem () {
   const items = namesList.querySelectorAll(".item");
   const middleIndex = Math.floor(items.length / 2);
   return items[middleIndex]; 
};

const middleItem = findMiddleItem();

middleItem.insertAdjacentHTML(
   "afterend",
   `
   <li class="item">Smith</li>
   <li class="item">Jeff</li>
   <li class="item">Larry</li>`
);

const getMel = namesList.querySelectorAll(".item")[10];
getMel.remove();

function oddNames(){
   const items = namesList.querySelectorAll(".item");
   console.log(items);
   for(let i = 0; i < items.length; i++){
       if ((i + 1) % 2 !== 0){
           items[i].style.backgroundColor = "pink";
       }
   }  
}

oddNames();
//});

*/









 




