let p = new Promise((resolve, reject) => {
    resolve('Resolved');
    reject('Rejected')
});

p.then((message) => {
    console.log("Then");
}).catch('Catch');


console.log(p);