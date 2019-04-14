const express = require('express');
const app = express();
const jokeRoute = require('./routes/joke');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}, req.body`);
    next();
});
app.use(jokeRoute);
app.use(express.static('files'));

//Handler for 404- resource not found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!');
});

//Handler for Error 400
app.use((err, req, res, next) => {
    console.error(err.stack)
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.info (`server has started on ${PORT}`));