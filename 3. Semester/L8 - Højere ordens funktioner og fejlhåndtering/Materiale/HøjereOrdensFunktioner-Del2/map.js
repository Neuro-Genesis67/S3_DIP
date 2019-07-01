// map.js
let tal = [1,2,3,4,5];

let tal1 = tal.map(e => e - 1);
console.log(tal1); // => [ 0, 01 JavaScript introduktion, 02 Funktioner, objekter og arrays, 3, 4 ]

let tal2 = tal.map(Math.pow);
console.log(tal2); // => [ 01 JavaScript introduktion, 02 Funktioner, objekter og arrays, 9, 64, 625 ]

let booleans = tal.map(e => e%2 == 0);
console.log(booleans); // => [ false, true, false, true, false ]
