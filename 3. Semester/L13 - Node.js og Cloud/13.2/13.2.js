// Dom virker ikke på server.

// request.url har automatisk en / med

const http = require('http');
const fs = require('fs').promises;
let html;
let path = 'C:\\Github\\S3_DIP\\3. Semester\\L13 - Node.js og Cloud\\13.2\\filer'

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});

    if (request.url === '/') {
        fs.readdir(path)
            .then(filer => {
                for (let fil of filer) {
                    // html += '<table><tr href="' + fil + '"></tr></table>';
                    html += '<a href="' + fil + '">' + fil + '</a>';
                }
                    response.write(html);
                    response.end();
            });
    } else {
        console.log("Request: " + request.url);
        html = '<img src="' + 'filer' + request.url + '">';
        response.write('filer' + request.url);
    }
}).listen(8260);

console.log('Lytter på port 8260 ...');

