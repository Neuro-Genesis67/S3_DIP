const http = require('http');
const fs = require('fs').promises; //file server
const express = require('express');
const app = express();

function log(request, responce, next) {
    console.log(request.method + ': ' + request.url);
    next();
}

app.use(log);

app.get('/', (request, response) => {
    if (request.url === '/' && request.method === 'GET') {
        console.log("Slash-path");
        fs.readdir('fil_server_eksempel/filer')
            .then(filer => {
                let rows = filer.map((fil) => {
                    //Map gaar gennem et attay og kalder en function (under) og erstatter med hvad funktionen retunerer
                    return `<tr><td>${fil}</td></tr>`
                });
                console.log(filer);

                response.send(`<html><body><div>` +
                    `<table>${rows.join("")}</table>` +
                    `</div></body></table>`);

                //let links = filer.map(fil) //How :)
                // retunere navnet paa alle filer i "filer" som et link
            }).catch(error => console.log("Error: " + error))
    } else {
        console.log("Not intended path");
        let sti = './fil_server_eksempel/filer' + request.url;
        fs.readFile(sti).then(function (data) {
            let typez = sti.split(".").pop();
            console.log("Mah type: " + typez);
        
            response.send(data);

        }).catch(error => {
            console.log("Error: " + error);
            response.send(`<html><body>${error}</body></html>`);

        })
    }
}).listen(8080);


console.log('Lytter på port 8080 ...');

