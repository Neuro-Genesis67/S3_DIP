const express = require('express');
const fetch = require('node-fetch');
const app = express();

let usersUrl = 'https://jsonplaceholder.typicode.com/users';
let html = "";

// Create server's HTML:
fetch(usersUrl)
    .then(response => response.json())
    .then(jason => {
        generateHtml(jason);
    })
    .catch(fejl => console.log('Fejl: ' + fejl));

// Create endpoint
app.get('/', (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
});

// Start server
app.listen(8080, () => console.log('Listening on port 8080...'));


function generateHtml(users) {
    html = '<table>';
    for (let i = 0; i < users.length; i++) {
        html +=
            '<tr>' +
            '<td>' + users[i].id + '</td>' +
            '<td>' + users[i].name + '</td>' +
            '<td>' + users[i].company.name + '</td>' +
            '</tr>';
    }
    html += '</table>';
    console.log("Table has been created");
}