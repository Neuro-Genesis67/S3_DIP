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


    // for (let i = 0; i < userList.length; i++) {
    //     console.log(userList[i].name);
    // }



        // //body reference
        // var body = document.getElementsByTagName("body")[0];
        //
        // // create elements <table> and a <tbody>
        // var tbl = document.createElement("table");
        // var tblBody = document.createElement("tbody");
        //
        // // cells creation
        // for (var j = 0; j <= 2; j++) {
        //     // table row creation
        //     var row = document.createElement("tr");
        //
        //     for (var i = 0; i < 2; i++) {
        //         // create element <td> and text node
        //         //Make text node the contents of <td> element
        //         // put <td> at end of the table row
        //         var cell = document.createElement("td");
        //         var cellText = document.createTextNode("cell is row " + j + ", column " + i);
        //
        //         cell.appendChild(cellText);
        //         row.appendChild(cell);
        //     }
        //
        //     //row added to end of table body
        //     tblBody.appendChild(row);
        // }
        //
        // // append the <tbody> inside the <table>
        // tbl.appendChild(tblBody);
        // // put <table> in the <body>
        // body.appendChild(tbl);
        // // tbl border attribute to
        // tbl.setAttribute("border", "2");





}