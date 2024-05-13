//Exercise1

const greeting = new Promise ( (resolve,reject) => {
  resolve ("Hello, Promises!");
})

greeting.then( (phrase) => {
  console.log(phrase);
})
  
 //Exercise2

 function setTimer(){
    return new Promise( (resolve, reject) => {
      let delay = Math.floor(Math.random() * 5) + 1;
      setTimeout( ()=> {
       const message = `Promise resolved after ${delay} seconds`;
       resolve(message);
      }, delay * 1000);
    })
 }

 setTimer().then( (message) => {
  console.log(message);
 });


 //Exercise3
 /* 
 const container = document.querySelector(".container");

 function displaySongDetails(){
  const song = prompt("Please enter a song");
 const artist = prompt("Please enter an artist");
  return new Promise ((resolve, reject) => {
    const songBody = document.createElement("div");
    const songDetails = `Song: ${song}, Artist: ${artist}`;
    songBody.textContent = songDetails;
    container.appendChild(songBody);
    resolve(songDetails);
  });
 }

 displaySongDetails()
  .then((message) => {
    console.log(message);
  });
*/

//Exercise4

const container = document.querySelector(".container");

 function checkAge(){
  const age = prompt("Please enter your age");
  return new Promise ((resolve, reject) => {
   if((parseInt(age) === NaN) || age > 120 || age < 0){
    reject ("Please enter a valid number");
   }else{
    const messageBody = document.createElement("h2");
    messageBody.textContent= "Welcome!";
    container.appendChild(messageBody);
    resolve (messageBody);
   }
  });
}

checkAge().then(message =>{
  console.log("Welcome message is displayed")
}).catch((error) => {
  console.error("Error:", error);
});