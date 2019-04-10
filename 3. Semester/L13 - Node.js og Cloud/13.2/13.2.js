const http = require('http');
const fs = require('fs').promises;
let html;
let path = 'C:\\Github\\S3_DIP\\3. Semester\\L13 - Node.js og Cloud\\13.2\\filer';

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});

    if (request.url === '/') {
        console.log("1: List of clickable filenames");
        fs.readdir('filer/')
            .then(filer => {
                for (let fil of filer) {
                    console.log(fil);
                    // html += '<table><tr href="' + fil + '"></tr></table>';
                    // html += '<a href="' + fil + '">' + fil + '</a>';
                    // html += '<a> 1 </a>';
                    html += "|" + fil;
                }
                    response.write(html);
                    response.end();
            });
    } else {
        console.log("2: Vis den angivne fil");
        // html = '<img src="' + 'filer' + request.url + '">';
        // response.write('filer' + request.url);
        html += '<a> 2 </a>';
        response.write(html);
        response.end();
    }
}).listen(8260);

console.log('Lytter på port 8260 ...');























// Dom virker ikke på server.
// request.url har automatisk en / med
