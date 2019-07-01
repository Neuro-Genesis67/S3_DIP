// const fetch = require('node-fetch');

let usersUrl = 'https://jsonplaceholder.typicode.com/users';
// let usersUrl = 'https://jsonplaceholder.typicode.com/usersX';
// let usersUrl = 'httpsX://jsonplaceholder.typicode.com/users';

fetch(usersUrl)
    .then(response => {
        if (response.status >= 400)
            throw new Error(response.status);
        else
            return response.json();
    })
    .then(resultat => console.log('Resultat: ' + resultat[1].name))
    .catch(fejl => console.log('Fejl: ' + fejl));
