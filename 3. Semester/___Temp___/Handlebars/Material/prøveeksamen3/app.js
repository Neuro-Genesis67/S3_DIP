const express = require('express');
const app = express();
const hbs = require('hbs');

// let customers = [
//     {phone: 11536537, name: "Peter", address: "Testvej 2"},
//     {phone: 26423135, name: "Faber", address: "Fabersvej 48"},
//     {phone: 38571287, name: "Torben", address: "Torbensgade 50"},
// ];

class Customer{
    constructor(phone, name, address){
        this.phone = phone;
        this.name = name;
        this.address = address;
    }
}

let customers = [new Customer(11536537, "Peter", "Petersvej 29")];

app.set('view engine', 'hbs');
app.set('views', 'templates');

app.use(express.static('filer'));
app.use(express.json());

app.get('/', function (request, response) {
    response.render('index', {customers})
});

app.get('/:nr', function (request, response) {
    response.send(customers.filter(c => c.phone == request.params.nr)[0].address)
});

app.listen(8080);

console.log("http://localhost:8080");
console.log('Lytter på port 8080 ...');
