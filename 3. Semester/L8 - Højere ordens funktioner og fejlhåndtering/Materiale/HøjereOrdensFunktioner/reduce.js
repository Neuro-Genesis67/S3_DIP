// reduce.js
let tal = [1,2,3,4,5];

let result1 = tal.reduce((a, e) => a+e);
console.log(result1); // => 15

let result2 = tal.reduce((a, e) => a+e, 100);
console.log(result2); // => 115

let result3 = tal.reduce((a, e) => a>e?a:e);
console.log(result3); // => 5
