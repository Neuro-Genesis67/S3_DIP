const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
let html = "";

app.get('/', (req, res) => {
    fs.readdir(__dirname + '/filer')
        .then(filer => {
            html = "";
            for (let fil of filer) {
                html += '<a href="'+ fil + '">' + fil + '</a><br>';
            }
        });
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
});

app.get('/:image', (req, res) => {
    fs.readdir(__dirname + '/filer')
        .then(filer => {
            for (let fil of filer) {
                if (fil == req.params.image) {
                        res.sendFile(path.join(__dirname + '\\filer\\' + fil));
                }
            }
        });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {console.log(`Listening on port ${port}`)});
