const express = require('express');
const app = express();
const fs = require('fs').promises;

app.use(express.static('filer'));

app.get('/', (request, response) => {
    fs.readdir('filer')
        .then(filer => {
            // ...
        })
}).listen(8080);

console.log('Lytter på port 8080 ...');
