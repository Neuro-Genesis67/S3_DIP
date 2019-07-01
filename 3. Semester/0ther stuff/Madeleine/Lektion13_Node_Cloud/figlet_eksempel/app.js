let http = require('http');
let figlet = require('figlet');

http.createServer(function (request, response) {
    response.writeHead(200);

    figlet.text('Figlet test!', (err, data) => {
        if (err) throw err;
        response.write(data);
        response.end();
    });
}).listen(8080);

console.log("Lytter på port 8080 ...");
