const express = require('express');
const fetch = require('node-fetch');
const handlebars = require('handlebars');
const app = express();

const users = 'https://jsonplaceholder.typicode.com/users';

//This needs to be async
app.get('/', (req, res) => {
    fetch(users)
        .then(users => users.json)
        .then(usersJSON => {
            for (let user of usersJSON) {
                console.log(user);
            }

        })
});

app.listen(3000);