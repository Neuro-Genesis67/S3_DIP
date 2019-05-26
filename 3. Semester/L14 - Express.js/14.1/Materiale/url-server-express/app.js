const express = require('express');
const app = express();

app.all('/', (request, response) => {
    let html = '<h1>' + request.method + ': /</h1>';
    response.send(html);
}).all('/:sti', function(request, response) {
    let html = '<h1>' + request.method + ': ' + request.params.sti + '</h1>';
    response.send(html);
}).listen(8080);

console.log('Lytter på port 8080 ...');
