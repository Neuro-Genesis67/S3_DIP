const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/templates')); // Consider replacing templates with path.join()...


// Creating an array of humans --
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let humans = [
    new Human("Tom", "28"),
    new Human("Sandra", "12"),
    new Human("Lars", "62"),
    new Human("karl", "14"),
];

app.get('/', (req, res) => {
   res.render('humans', {humans})
});

app.listen(3000);










