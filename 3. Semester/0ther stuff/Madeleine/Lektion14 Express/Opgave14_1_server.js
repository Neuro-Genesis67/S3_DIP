let usersUrl = 'https://jsonplaceholder.typicode.com/users';

const express = require('express');
const app = express();
const fetch = require('node-fetch');

function log(request, responce, next) {
    console.log(request.method + ': ' + request.url);
    next();
}

app.use(log);

app.get('/', (req, res) => {
    //res.send("Testies :)");
    fetch(usersUrl)
        .then(resultat => {
            return resultat.json();
        }).then((users) => {
        let rows = users.map((user) => {
            //Map gaar gennem et attay og kalder en function (under) og erstatter med hvad funktionen retunerer
            return `<tr><td>${user["name"]}</td></tr>`
        });
        res.send(`<html><body><div>`+
            `<table>${rows.join("")}</table>` +
            `</div></body></table>`);

    })
        .catch(fejl => console.log('Fejl: ' + fejl));
}).listen(8080);

console.log('Lytter på port 8080 ...');
