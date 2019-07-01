let usersUrl = 'https://jsonplaceholder.typicode.com/users';
// let usersUrl = 'https://jsonplaceholder.typicode.com/usersX';
// let usersUrl = 'httpsX://jsonplaceholder.typicode.com/users';

let xhr = new XMLHttpRequest();
xhr.responseType = "json";
let async = true;
xhr.open('GET', usersUrl, async);
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE)
        if (xhr.status >= 400 || xhr.status === 0)
            console.log('Fejl: ' + xhr.status);
        else {
            let resultat = xhr.response;
            console.log('Resultat: ' + resultat[1].name);
        }
};
xhr.send();
