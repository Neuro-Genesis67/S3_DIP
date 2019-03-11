let o = {
    x: 1,
    a: () => this.x, // arrow function dur ikke som metode
    b() { return this.x; }, // ny metode notation!
    m() {
        function f() { return this.x; }
        return f();
    },
    n() {
        let g = () => this.x;
        return g();
    }
};
console.log(o.a()); // => undefined
console.log(o.b()); // => 1
console.log(o.m()); // => undefined
console.log(o.n()); // => 1
