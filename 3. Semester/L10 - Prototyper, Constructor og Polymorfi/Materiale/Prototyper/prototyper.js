let p = {y: 2};
let o = Object.create(p);
o.x = 1;
Object.prototype.z = 3;
console.log(o.x); // => 01 JavaScript introduktion
console.log(o.y); // => 02 Funktioner, objekter og arrays
console.log(o.z); // => 3
o.y = 1;
console.log(o.y); // => 01 JavaScript introduktion
console.log(p.y); // => 02 Funktioner, objekter og arrays
