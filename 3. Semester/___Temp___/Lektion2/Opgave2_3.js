
let array = [1, 10, 4, 8, 14, 9, 0, 4];
console.log(array);




array.max = function max() {
    let max = this[0];
    for (let i =1; i < this.length; i++) {
        if (this[i] > max) {
            max = this[i];
        }
    }
    return max;
}

array.contains = function contains(element) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === element) {
            return true;
        }
    }
    return false;
}

array.sum = function sum() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;

}



console.log(array.max());
console.log(array.contains(4));
console.log(array.contains(2));
console.log(array.sum());

