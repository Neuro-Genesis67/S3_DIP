// const fetch = require('node-fetch');

let usersUrl = 'https://jsonplaceholder.typicode.com/users';

let row;
let iD;
let name;
let company;
let text;
// let usersUrl = 'https://jsonplaceholder.typicode.com/usersX';
// let usersUrl = 'httpsX://jsonplaceholder.typicode.com/users';



fetch(usersUrl)
    .then(response => {
        if (response.status >= 400)
            throw new Error(response.status);
        else
            return response.json();
    })
    .then(resultat => {generateTable(), addUsers(resultat)}) //, addUsers(resultat)
    .catch(fejl => console.log('Fejl: ' + fejl));



function generateTable() {

        // user row
        row = document.createElement("tr");

        // id
        iD = document.createElement("td");
        text = document.createTextNode("ID");
        iD.id = "tblHeader";
        iD.appendChild(text);

        // navn
        name = document.createElement("td");
        text = document.createTextNode("Name");
        name.id = "tblHeader";
        name.appendChild(text);

        // firma
        company = document.createElement("td");
        text = document.createTextNode("Company");
        company.id = "tblHeader";
        company.appendChild(text);

        row.appendChild(iD);
        row.appendChild(name);
        row.appendChild(company);
        document.body.appendChild(row);
}

function addUsers(userList) {

    for (let i = 0; i < userList.length; i++) {
        // user row
        row = document.createElement("tr");

        // id
        iD = document.createElement("td");
        text = document.createTextNode(userList[i].id);
        iD.appendChild(text);

        // navn
        name = document.createElement("td");
        text = document.createTextNode(userList[i].name);
        name.appendChild(text);

        // firma
        company = document.createElement("td");
        text = document.createTextNode(userList[i].company.name);
        company.appendChild(text);

        row.appendChild(iD);
        row.appendChild(name);
        row.appendChild(company);
        document.body.appendChild(row);
    }
}