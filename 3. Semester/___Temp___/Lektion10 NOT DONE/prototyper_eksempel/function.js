let f = function () {};
console.log(f.toString()); // => function () {}
console.log(Object.prototype.isPrototypeOf(f)); // => true
console.log(Function.prototype.isPrototypeOf(f)); // => true

let o = {};
console.log(o.toString()); // => [object Object]
console.log(Object.prototype.isPrototypeOf(o)); // => true
console.log(Function.prototype.isPrototypeOf(o)); // => false
