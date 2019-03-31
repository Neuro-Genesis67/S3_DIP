let usersUrl = 'https://jsonplaceholder.typicode.com/users';
let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=3';

//_____________________________________________________________________
function name(url) {
    try {
        fetch(url)
            .then(response => response.json())
            .then(arr => {
                for (let user of arr) {
                    if (user.id === 3) {
                        console.log(user.name);
                    }
                }
            })
} catch (e) {
    console.log('Exception: ' + e);
}
};
function title(url) {
    try {
        fetch(url)
            .then(response => response.json())
            .then(arr => {
                for (let user of arr) {
                    if (user.id === 22) {
                        console.log(user.title);
                    }
                }
            })
} catch (e) {
    console.log('Exception: ' + e);
}
    };

//______________________________Async____________________________________
async function nameAsync(url) {
    try {
        const response = await fetch(url);
        const arr = await response.json();
        for (let user of arr) {
            if (user.id === 3) {
                console.log(user.name);
            }
        }
    } catch (e) {
        console.log('Exception: ' + e);
    }
};

async function titleAsync(url) {
    try {
    const response = await fetch(url);
    const arr = await response.json();
    for (let user of arr) {
        if (user.id === 22) {
            console.log(user.title);
        }
    }
    } catch (e) {
        console.log('Exception: ' + e);
    }
};


Promise.all([name(usersUrl), title(postsUrl), nameAsync(usersUrl), titleAsync(postsUrl)])
    .catch(error => console.log("Error: " + error));



