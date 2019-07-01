const http = require('http');
const fs = require('fs').promises;
const express = require('express');
const app = express();

function log(request, responce, next) {
    console.log(request.method + ': ' + request.url);
    next();
}

app.use(log);

app.get('/',(request, response) => {

        fs.readdir('fil_server_eksempel/filer')
            .then(filer => {
                let htmlstring = "";
                let rows = filer.map((fil) => {
                    console.log(fil);
                    htmlstring += "<tr><td><img src=\"'fil_server_eksempel/filer'/" + fil + "\"></td></tr>";
                    console.log(htmlstring);

                });
                response.send("<hmtl><body><table>" + htmlstring + "</table></body></hmtl>");

            }).catch(error => {
            console.log("Error: " + error);
            response.send(`<html><body>${error}</body></html>`);
        });
    } ).listen(8080);

console.log('Lytter på port 8080 ...');

