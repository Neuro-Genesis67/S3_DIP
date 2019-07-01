class StringStack {

    constructor(size) {
       this.theArray = [size];
       this.size = size;
       this.counter = 0;
    }

    push(object) {
        if (this.counter < this.size) {
            this.theArray[this.counter] = object;
            this.counter ++;
            return "Added";
        }
        else {
            return "Full";
        }
    }

    pop() {
        let val = this.theArray[this.counter-1];
        this.counter--;
        return val;
    }

}

let ss = new StringStack(10);
console.log(ss.push("1"));
console.log(ss.push("2"));
console.log(ss.push("3"));
console.log(ss.push("4"));
console.log(ss.push("5"));
console.log(ss.push("6"));
console.log(ss.push("7"));
console.log(ss.push("8"));
console.log(ss.push("9"));
console.log(ss.push("10"));
console.log(ss.push("11"));

console.log(ss.pop());
console.log(ss.pop());
console.log(ss.push("11"));
console.log(ss.pop());


