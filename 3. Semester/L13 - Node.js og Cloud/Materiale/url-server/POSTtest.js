const fetch = require('node-fetch');

let url = 'http://localhost:8080/test';

fetch(url, { method: "POST" })
    .then(resultat => {
        if (resultat.status >= 400)
            throw new Error(resultat.status);
        else
            return resultat.text();
    })
    .then(resultat => console.log('Resultat: ' + resultat))
    .catch(fejl => console.log('Fejl: ' + fejl));
