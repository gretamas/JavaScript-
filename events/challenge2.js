const table = document.querySelector(".table");
const headers = document.querySelectorAll(".headers");

let tableData = [
    {name: "John", age: 30, score: 80},
    {name: "Mike", age: 32, score: 50},
    {name: "Alice", age: 29, score: 44},
    {name: "Sam", age: 35, score: 100},
    {name: "Diana", age: 27, score: 95},
];

Array.from(headers).forEach(header => {
    header.addEventListener("click", () => {
        const column = header.dataset.column;
        const order = header.dataset.order;
        if (order === "desc") {
            tableData = tableData.sort((a, b) => a[column] > b[column] ? 1 : -1);
            header.dataset.order = "asc";
        } else {
            tableData = tableData.sort((a, b) => a[column] < b[column] ? 1 : -1);
            header.dataset.order = "desc";
        }
        buildTable(tableData);
    });
});

function buildTable(data) {
    let tableBody = document.querySelector(".table-body");
    tableBody.innerHTML = '';
    data.forEach(rowData => {
        let row = `
            <tr>
                <td>${rowData.name}</td>
                <td>${rowData.age}</td>
                <td>${rowData.score}</td>
            </tr>`;
        tableBody.innerHTML += row;
    });
}
