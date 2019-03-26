class StringStack {
    constructor() {
        this.arr = [];
}

push(e) {
        this.arr.push(e);
};

pop(e) {
    if (this.arr.length > 0) {
       return this.arr.pop(e);
    } else {
        console.log("Nothing to pop");
    }
};

printArr() {
    console.log("| Contents of StringStack: |");
    if (this.arr[0] == null) {
        console.log("|       List is empty      |");
    } else {

    for (let e of this.arr) {
        console.log(e);
    }
    }
    console.log("|__________________________|\n");
}
}


let ss = new StringStack();


ss.push("Johnnay");
ss.push("Timmay");
ss.push("Jimmay");
ss.push("Bennay");
ss.printArr();

console.log("Popping: " + ss.pop());
console.log("Popping: " + ss.pop());
console.log("Popping: " + ss.pop());
console.log("Popping: " + ss.pop() + "\n");
ss.printArr();
