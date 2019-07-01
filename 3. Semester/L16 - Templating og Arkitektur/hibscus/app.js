const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
app.set('view engine', 'hbs');
app.set('views', 'templates');

// console.log(__dirname); = C:\Program images (x86)\Eclipse\Github\S3_DIP\3. Semester\L16 - Templating og Arkitektur\hibscus
console.log(path.join(__dirname, '\\filer\\'));


// Routes
app.get('/', (req, res) => {
    res.render('index', {
        "filer": fs.readdir(__dirname + '/filer').then(filer => {

        })
    })
});














const port = process.env.PORT || 8080;
app.listen(port, () => {console.log(`Listening on port ${port}`)});