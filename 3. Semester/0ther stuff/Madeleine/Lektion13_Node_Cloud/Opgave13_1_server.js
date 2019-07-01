const http = require('http');
const fetch = require('node-fetch');

let usersUrl = 'https://jsonplaceholder.typicode.com/users';

http.createServer((request, response) => {
    if (request.method === 'GET') {
        fetch(usersUrl)
            .then(resultat => {
                return resultat.json();
            })
            .then((users) => {
                let rows = users.map((user) => {
                    //Map gaar gennem et attay og kalder en function (under) og erstatter med hvad funktionen retunerer
                   return `<tr><td>${user["name"]}</td></tr>`
                });
                response.writeHead(200);
                response.write(`<html><body><div>`+
                    `<table>${rows.join("")}</table>` +
                    `</div></body></table>`);
                response.end();
            })
    } else {
        response.writeHead(405);
        response.write('Kun GET er tilladt!');
        response.end();
    }
}).listen(8080);

console.log('Lytter på port 8080 ...');


