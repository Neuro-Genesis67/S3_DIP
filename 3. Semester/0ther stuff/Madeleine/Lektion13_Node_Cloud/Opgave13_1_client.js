let url = 'http://localhost:8080/test';
const fetch = require('node-fetch');

fetch(url, {
        method: "GET" //retunerer promise
    }).then(resultat => {
    if (resultat.status >= 400) //Hvis fejl
        throw new Error(resultat.status);
    else
        return resultat.text(); //retunerer promise
}).then(resultat => console.log('Resultat: ' + resultat)).catch(fejl => console.log('Fejl: ' + fejl));

