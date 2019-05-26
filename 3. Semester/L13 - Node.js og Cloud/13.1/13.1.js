let usersUrl = 'https://jsonplaceholder.typicode.com/users';
const fetch = require('node-fetch');
const http = require('http');
let html;

// Create server's HTML:
fetch(usersUrl)
    .then(response => response.json())
    .then(jason => {
        generateHtml(jason);
    })
    .catch(fejl => console.log('Fejl: ' + fejl));

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

// Create the server with the generated HTML
http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
}).listen(3000);
console.log("Server launched on port 3000...");



























