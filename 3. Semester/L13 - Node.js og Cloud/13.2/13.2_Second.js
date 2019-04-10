const http = require('http');
const fs = require('fs').promises;
let html;
let path = '3. Semester/L13 - Node.js og Cloud/13.2/filer';

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

        let res = '<img src="'+ request.url.slice(1) + '">';
        console.log(res);
    // <img src="filer/kat1.jpg">
        response.write(res);
        response.end();
    }
}).listen(8888);
console.log('Connect to server in browser with: localhost:8888');