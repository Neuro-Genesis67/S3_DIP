let usersUrl = 'https://jsonplaceholder.typicode.com/users';
// let usersUrl = 'https://jsonplaceholder.typicode.com/usersX';
// let usersUrl = 'httpsX://jsonplaceholder.typicode.com/users';

let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
// let postsUrl = 'https://jsonplaceholder.typicode.com/postsX?userId=';
// let postsUrl = 'httpsX://jsonplaceholder.typicode.com/posts?userId=';

// asynkron er mekanismer der venter på noget og så gør den det
// promise er en indpakning af en callback.



function logData(url) {
    fetch(url)
        .then(response => response.json())
        .then(arr => {
            for (let user of arr) {
                if (user.id === 2) {
                    console.log("It's " + user.name + " bitch.");
                }
            }
        })
};

async function logDataAsync(url) {
    const response = await fetch(url);
    const arr = await response.json();
    for (let user of arr) {
        if (user.id === 2) {
            console.log("It's " + user.name + " bitch.");
        }
    }
};

logData(usersUrl);
logDataAsync(usersUrl);

// De andre links er med vilje ubrugelige.












