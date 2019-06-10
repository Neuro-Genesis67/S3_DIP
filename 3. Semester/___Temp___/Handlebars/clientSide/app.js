const express = require('express');
const handlebars = require('handlebars');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/files')));

app.listen(3000, () => {console.log(`Listening on port 3000`)});