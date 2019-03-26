const usersUrl = 'https://jsonplaceholder.typicode.com/users';

function logData(url) {
    fetch(url)
        .then(response => response.json())
        .then(x => console.log(x));
}

async function logDataAsync(url) {
    const response = await fetch(url);
    const array = await response.json();
    console.log(array);
}

logData(usersUrl);
logDataAsync(usersUrl);
