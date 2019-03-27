let usersUrl = 'https://jsonplaceholder.typicode.com/users';

function logData(url) {
    try {
    fetch(url)
        .then(response => response.json())
        .then(arr => {
            for (let user of arr) {
                if (user.id === 2) {
                    console.log(user.name);
                }
            }
        })
    } catch (e) {
        console.log('Exception: ' + e);
    }
};

async function logDataAsync(url) {
    try {
    const response = await fetch(url);
    const arr = await response.json();
    for (let user of arr) {
        if (user.id === 2) {
            console.log(user.name);
        }
    }
    } catch (e) {
        console.log('Exception: ' + e);
    }
};

logData(usersUrl);
logDataAsync(usersUrl);














