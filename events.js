const button = document.querySelector(".btn");
const nameInput = document.querySelector(".name-input");
const artistInput = document.querySelector(".artist-input");
const runtimeInput = document.querySelector(".runtime-input");
const listItem = document.querySelector(".list-item");

button.addEventListener("click", function(event) {
    event.preventDefault(); 
    const songDetails = document.createElement("div");
    songDetails.classList.add("song-details"); 

    const name = document.createElement("p");
    const artist = document.createElement("p");
    const runtime = document.createElement("p");
    const inputDetails = document.createElement("div");
    const bin = document.createElement("div");

    inputDetails.classList.add("input-text");

    name.textContent = nameInput.value;
    artist.textContent = "by    " + artistInput.value;
    runtime.textContent =  runtimeInput.value;
    bin.innerHTML = '<a><i class="fa-solid fa-trash bin-icon"></i></a>';

    name.classList.add("bold");

    inputDetails.appendChild(name);
    inputDetails.appendChild(artist);
    songDetails.appendChild(inputDetails);
    songDetails.appendChild(bin);
    
    listItem.appendChild(songDetails);

    nameInput.value = "";
    artistInput.value = "";
    runtimeInput.value = "";

    const binIcon= bin.firstElementChild;

    binIcon.addEventListener("click", function(){
    songDetails.style.display="none";
    });

});



