const o = require('./modul');
console.log(o.x); // => 1

const e = require('./modul2');
console.log(e.p.y); // => 2
console.log(e.q.z); // => 3

const {p, q} = require('./modul2');
console.log(p.y); // => 2
console.log(q.z); // => 3

