let usersUrl = 'https://jsonplaceholder.typicode.com/users';

const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.get('/', (request, response) => {
    fetch(usersUrl)
        .then(resultat => {
            // ...
        })
        .catch(fejl => console.log('Fejl: ' + fejl));
}).listen(8080);

console.log('Lytter på port 8080 ...');
