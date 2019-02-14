let arr = [22, 24, 55, 1, 3, 99, 105, 209];
let testArr = [22, 24, 55, 1, 3, 99, 105, 209];

arr.max = function (array) {
    let temp;
    let biggest = -1;

    for (let i in array) {
        temp = array[i];
        if (temp > biggest) {
            biggest = temp;
        }
    }
    return biggest;
};

arr.contains = function (array, element) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
};

arr.sum = function (array) {
    let total = 0;
    for (let i of array) {
        total += i;
    }
    return total;
};

console.log("Biggest number in arr: ", arr.max(testArr));
console.log("Array contains 24: ", arr.contains(testArr, 24));
console.log("Array contains 2500: ", arr.contains(testArr, 2500));
console.log("Sum of the array: ", arr.sum(testArr));
