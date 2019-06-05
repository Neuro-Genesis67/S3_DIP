const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
let html = "";

app.get('/', (req, res) => {
    fs.readdir(__dirname + '/filer')
        .then(filer => {
            html = "";
            for (let fil of filer)
                html += '<a href="'+ fil + '">' + fil + '</a><br>';
            res.send(html);
        });
});

app.get('/:filename', (req, res) => {
    fs.readdir(__dirname + '/filer')
        .then(filer => {
            for (let fil of filer) {
                if (fil == req.params.filename)
                    res.sendFile(path.join(__dirname + '\\filer\\' + fil));
            }
        });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {console.log(`Listening on port ${port}`)});