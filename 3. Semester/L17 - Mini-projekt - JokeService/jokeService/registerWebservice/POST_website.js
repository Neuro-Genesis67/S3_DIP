let url = 'https://krdo-joke-registry.herokuapp.com/api/services';
const fetch = require('node-fetch');
let site = { name: "Uuuh", address: "https://jokeservice-website.herokuapp.com/", secret: "denskalbarevære" };

fetch(url, {method: "POST",
            body: JSON.stringify(site),
            headers: { 'Content-Type': 'application/json'}})
.then(reply => {
    if (reply.status >= 400) {
        throw new Error(reply.status);
    } else {
        return reply.json();
    }
})
.then(result => console.log('Resultat: %o', result))
.catch(error => console.log('Error: ' + error));

