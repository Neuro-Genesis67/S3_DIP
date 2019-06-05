const json = `[
    {
        "navn": "Tom",
        "kast": [2, 1, 2]
    },{
        "navn": "Sandra",
        "kast": [5, 5, 6]
    },{
        "navn": "Emil",
        "kast": [6, 1, 5]
    }
]`;

const arr = JSON.parse(json);

function kast(array, navn) {
    const kast = [];
    for (let person of array) {
       if (person.navn === navn)
           kast.push(person.kast);
        }
    return kast;
}

function størst(array) {
    const størst = [0, 0, 0];
    for (let i = 0; i < array.length; i++) {
        for (let person of array) {
            if (person.kast[i] > størst[i])
                størst[i] = person.kast[i];
        }
    }
    return størst;
}

console.log(kast(arr, "Sandra"));
console.log(størst(arr));


