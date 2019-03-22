const http = require('http');

http.createServer((request, response) => {
    let html = '<h1>' + request.method + ': ' + request.url + '</h1>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
}).listen(8080);

console.log('Lytter på port 8080 ...');
