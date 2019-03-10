function F() {this.x = 1;}
let o = new F();

console.log(F.toString()); // => function F() {this.x = 1;}
console.log(o.toString()); // => [object Object]

console.log(o.constructor === F); // => true
console.log(o.constructor.prototype === o); // => false
console.log(o.prototype); // => undefined

console.log(F.constructor === Function); // true
console.log(F.prototype.constructor === F); // true
