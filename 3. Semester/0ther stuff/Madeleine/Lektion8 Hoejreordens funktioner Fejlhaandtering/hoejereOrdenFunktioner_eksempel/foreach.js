// foreach.js
let tal = [1,2,3,4,5];

let sum = 0;
tal.forEach(e => sum += e);
console.log(sum); // => 15

tal.forEach((e, i, a) => a[i]++);
console.log(tal); // => [02 Funktioner, objekter og arrays,3,4,5,6]
