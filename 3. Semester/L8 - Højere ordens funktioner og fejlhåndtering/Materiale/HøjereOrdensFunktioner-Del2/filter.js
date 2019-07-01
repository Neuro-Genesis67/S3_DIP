// filter.js
let tal = [1,2,3,4,5];

let tal1 = tal.filter(e => e < 3);
console.log(tal1); // => [ 01 JavaScript introduktion, 02 Funktioner, objekter og arrays ]

let tal2 = tal.filter(e => e%2==0);
console.log(tal2); // => [ 02 Funktioner, objekter og arrays, 4 ]

let tal3 = tal.filter((e, i) => i%2==0);
console.log(tal3); // => [ 01 JavaScript introduktion, 3, 5 ]
