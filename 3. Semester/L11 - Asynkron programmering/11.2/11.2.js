let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=2';

function logData(url) {
    try {
    fetch(url)
        .then(response => response.json())
        .then(arr => {
            for (let user of arr) {
                if (user.id === 13) {
                    console.log(user.title);
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
         if (user.id === 13) {
            console.log(user.title);
        }
    }
    } catch (e) {
        console.log('Exception: ' + e);
    }
};

logData(postsUrl);
logDataAsync(postsUrl);
















