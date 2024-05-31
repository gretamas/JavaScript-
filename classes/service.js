
class UsersData {
    constructor(url) {
        this.url = url;
        this.data = null;
    }

    myHttpRequest = () => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", this.url);
            xhr.addEventListener("load", () => {
                if (Math.floor(xhr.status / 100) !== 2) {
                    console.log(`Error. Status code: ${xhr.status}`, xhr);
                    reject(`Error. Status code: ${xhr.status}`);
                    return;
                }
                this.data = JSON.parse(xhr.response);
                resolve(this.data);
            });
            xhr.addEventListener("error", () => {
                console.log("Network error");
                reject("Network error");
            });
            xhr.send();
        });
    }

    getData = () => {
        return this.data;
    }
}



export default UsersData;