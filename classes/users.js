import UsersData from "./service.js";
const userList = document.querySelector("ul"); 
const url = "https://jsonplaceholder.typicode.com/users";

const usersData1 = new UsersData(url); //Create request1 for server withthis url

class Users { // it will be users array
    constructor(usersData1) { //it takes users data from server
        this.usersData1 = usersData1;
    }

    processData() {
        const users = this.usersData1.getData(); //downloads it
        if (users) {
            console.log("Users available", users);
            this.renderList(users);
        } else {
            console.log("No available data");
        }
    }

    renderList(users){
      users.forEach(user => {
        const userListItem = document.createElement("li");
            userListItem.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(userListItem);
      });
    }
}

//now we launch it

usersData1.myHttpRequest().then(() => {  //we launch request to server
    const users = new Users(usersData1); //then create users array
    users.processData();                 //then launch data processing downloading response
}).catch(error => {
    console.log("Error fetching user data:", error);
});





