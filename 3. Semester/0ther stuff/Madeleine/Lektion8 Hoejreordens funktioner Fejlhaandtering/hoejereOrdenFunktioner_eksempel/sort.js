// sort.js
let tal = [30, 4, 10, 2, 0];

tal.sort();
console.log(tal); // => [ 0, 10, 02 Funktioner, objekter og arrays, 30, 4 ]

tal.sort((a, b) => a-b);
console.log(tal); // => [ 0, 02 Funktioner, objekter og arrays, 4, 10, 30 ]

tal.sort((a, b) => b-a);
console.log(tal); // => [ 30, 10, 4, 02 Funktioner, objekter og arrays, 0 ]
