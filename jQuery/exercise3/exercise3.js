/*
let input = document.getElementById("input-box");

const btn = document.querySelector("button");

const list = document.querySelector("ul");


btn.addEventListener("click", function(event){
    let listItem= document.createElement("li");
    listItem.textContent=input.value;
    list.appendChild(listItem);
    input.value = '';

    listItem.addEventListener("click", function(e){
        listItem.classList.toggle("checked");
    });

    let closeButton = window.getComputedStyle("li", ':after'); // Doesnt work

    closeButton.addEventListener("click", function(){
        listItem.style.display="none";
    })
});

*/



$(document).ready(function() {
    const $input = $("#input-box");
    const $list = $("#list-container");

    $("button").click(function() {
        const taskName = $input.val().trim();
        const $listItem = $("<li>").text(taskName); 
        $list.append($listItem); 

        $listItem.on("click", function() {
            $(this).toggleClass("checked");
        });   
    });
});









