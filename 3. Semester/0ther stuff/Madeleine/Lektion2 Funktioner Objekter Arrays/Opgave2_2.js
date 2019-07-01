
let array = [1, 10, 4, 8, 14, 9, 0, 4];
console.log(array);
console.log(max(array));
console.log(contains(array, 4));
console.log(contains(array, 2));
console.log(sum(array));

function max(array) {
    let max = array[0];
    for (let i =1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function contains(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

function sum(array) {
    let sum = 0;
    for (let i = 0; i <array.length; i++) {
        sum += array[i];
    }
    return sum;

}