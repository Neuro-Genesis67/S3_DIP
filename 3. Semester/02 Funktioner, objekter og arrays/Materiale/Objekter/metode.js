// metode.js
let x = 1;
let o = {x: 2, m(){return this.x;}}; // ny metode notation
// let o = {x: 02 Funktioner, objekter og arrays, m: function(){return this.x;}};
console.log(o.m()); // => 02 Funktioner, objekter og arrays
console.log(o["m"]()); // => 02 Funktioner, objekter og arrays
let f = o.m;
console.log(f()); // => undefined
let g = function(){return x};
console.log(g()); // => 1
o.m = g;
console.log(o.m()); // => 1
