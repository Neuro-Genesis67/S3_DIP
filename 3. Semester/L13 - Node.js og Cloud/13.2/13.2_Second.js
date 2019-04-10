const http = require('http');
const fs = require('fs').promises;
let html;
let path = '3. Semester/L13 - Node.js og Cloud/13.2/filer';
let filer = '3. Semester/L13 - Node.js og Cloud/13.2';

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    if (request.url === '/') {
        console.log("1");
        fs.readdir(path)
            .then(filer => {
                html = "";
                for (let fil of filer) {
                    html += '<a href="filer/' + fil + '">' + fil + '</a><br>';
                }
                console.log("1:" + html);
                response.write(html);
                response.end();
            })


    } else {
        console.log("2" + request.url);

        let sti = filer + request.url;
        fs.readFile(sti).then(data => {
            response.writeHead(200);
            response.write(data);
            response.end();
        })
    }
    console.log('Connect to server in browser with: localhost:8888');
}).listen(8888);;
