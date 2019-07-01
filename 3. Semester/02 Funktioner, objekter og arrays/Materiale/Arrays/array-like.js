// array-like.js
let s = 'abcd';
let t = '';
for (var i in s)
    t += s[i] + ",";
console.log(t); // => a,b,c,d,
console.log(Array.from(s)); // => [ 'a', 'b', 'c', 'd' ]
