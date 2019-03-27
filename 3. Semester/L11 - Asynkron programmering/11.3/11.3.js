let usersUrl = 'https://jsonplaceholder.typicode.com/users';
let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=3';

//_____________________________________________________________________
function name(url) {
        fetch(url)
            .then(response => response.json())
            .then(arr => {
                for (let user of arr) {
                    if (user.id === 3) {
                        console.log(user.name);
                    }
                }
            })
};
function title(url) {
        fetch(url)
            .then(response => response.json())
            .then(arr => {
                for (let user of arr) {
                    if (user.id === 22) {
                        console.log(user.title);
                    }
                }
            })
    };

//______________________________Async____________________________________
async function nameAsync(url) {
        const response = await fetch(url);
        const arr = await response.json();
        for (let user of arr) {
            if (user.id === 3) {
                console.log(user.name);
            }
        }
};

async function titleAsync(url) {
    const response = await fetch(url);
    const arr = await response.json();
    for (let user of arr) {
        if (user.id === 22) {
            console.log(user.title);
        }
    }
};


Promise.all([name(usersUrl), title(postsUrl)])
    .catch(error => console.log("Error: " + error));

Promise.all([nameAsync(usersUrl), titleAsync(postsUrl)])
    .catch(error => console.log("Error: " + error));


