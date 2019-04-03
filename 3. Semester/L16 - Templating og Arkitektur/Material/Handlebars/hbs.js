const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const express = require('express');
const app = express();
const fetch = require('node-fetch');
const hbs = require('3. Semester/L16 - Templating og Arkitektur/Material/Handlebars/hbs');

app.set('view engine', 'hbs');
app.set('views', 'templates');
hbs.registerPartials('templates');

app.get('/', async function (request, response) {
    const usersJSON = await fetch(usersUrl);
    const users = await usersJSON.json();
    response.render('index', {
        "title": "Brugere - hbs",
        users
    });
    console.log(usersJSON.constructor)
}).listen(8080);

console.log('Lytter på port 8080 ...');
