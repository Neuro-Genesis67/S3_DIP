const express = require('express');
const handlebars = express();

handlebars.use(express.static('filer'));

handlebars.get('/', function (request, response) {
    response.sendStatus(404);
}).listen(8080);

console.log('Lytter på port 8080 ...');
