const http = require('http');
const fs = require('fs').promises;
let html;
let path = '3. Semester/L13 - Node.js og Cloud/13.3/filer';
let filerFolder = '3. Semester/L13 - Node.js og Cloud/13.3';
let imagePath = "";

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    if (request.url === '/') {
        console.log("1");
        fs.readdir(path)
            .then(filer => {
                html = '';
                for (let fil of filer) {
                   if (fil.substring(fil.length-3, fil.length) === "jpg") {
                       html +=
                       '<img src="' + "---Path goes here---" + '" alt="Dickpic" width="600" height="400">\n'; // Jeg tror path er forkert
                   }
                }
                response.write(html);
                response.end();
            })
    } else {
        console.log("2");
        let sti = 'filer' + request.url;
        // ...
    }
}).listen(8888);

console.log('Connect to server in browser with: localhost:8888');
