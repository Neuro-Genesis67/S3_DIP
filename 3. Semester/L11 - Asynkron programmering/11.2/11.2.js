let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=2';

function logData(url) {
    fetch(url)
        .then(response => response.json())
        .then(arr => {
            for (let user of arr) {
                if (user.id === 13) {
                    console.log(user.title + " - I hope that someday I will mature");
                }
            }
        })
};

async function logDataAsync(url) {
    const response = await fetch(url);
    const arr = await response.json();
    for (let user of arr) {
         if (user.id === 13) {
            console.log(user.title+ " - That's wishful thinking");
        }
    }
};

logData(postsUrl);
logDataAsync(postsUrl);
















