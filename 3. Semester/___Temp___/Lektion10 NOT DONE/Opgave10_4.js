class StringStack {

    constructor(size) {
       this.theArray = [size];
       this.size = size;
       this.counter = 0;
    }

    push(object) {
        if (this.size < this.counter) {
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