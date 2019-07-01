const http = require('http');
const fs = require('fs').promises;

http.createServer((request, response) => {
    if (request.url === '/') {
        fs.readdir('fil_server_eksempel/filer')
            .then(filer => {
                let htmlstring = "";
                let rows = filer.map((fil) => {
                    htmlstring += "<tr><td><img src=\"" + fil + "\"></td></tr>";    //TODO

                });
                response.write("<table>" + htmlstring + "</table>");
                response.end()
            }).catch(error => console.log(error));
    } else {
        let sti = 'fil_server_eksempel/filer' + request.url;
        fs.readFile(sti).then(function (data) {
            let typez = sti.split(".").pop();
            console.log("Mah type: " +typez);
            response.writeHead(200, {'Content-Type' : typez});
            response.write(data);
            response.end();

        }).catch(error => {
            console.log("Error: " + error);
            response.write(`<html><body>${error}</body></html>`);
            response.end();
        })
        // ...
    }
}).listen(8080);

console.log('Lytter på port 8080 ...');

