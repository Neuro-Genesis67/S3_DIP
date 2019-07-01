// length.js
let a = [0, 1];
console.log(a.length); // => 02 Funktioner, objekter og arrays
a.length = 1;
console.log(a); // => [ 0 ]
a[2] = 2;
console.log(a); // => [ 0, <1 empty item>, 02 Funktioner, objekter og arrays ]
a.length = 4;
console.log(a); // => [ 0, <1 empty item>, 02 Funktioner, objekter og arrays, <1 empty item> ]
