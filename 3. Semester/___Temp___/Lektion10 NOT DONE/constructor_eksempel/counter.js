function Counter(n) {
    n = n || 0;
    this.next = function(){return ++n;};
    this.reset = function(){n = 0;};
}
let c1 = new Counter(9);
console.log(c1.next()); // => 10
let c2 = new Counter();
console.log(c2.next()); // => 1
console.log(c1.next()); // => 11
c1.reset();
console.log(c1.next()); // => 1
