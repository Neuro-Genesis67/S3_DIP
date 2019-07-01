// Programmer nedenstående funktioner:
// • max(array): returnerer det største element i arrayet.
// • contains(array, element): returnerer true hvis elementet findes i arrayet, ellers false
// • sum(array): returnerer summen af elementerne i arrayet.

let arr = [4, 7, 1, 8, 34, 77, 354, 938, 3, 4, 5];

function max(array) {
    let biggest = 0;
    for (let num of array) {
        if (num > biggest) {
            biggest = num;
        }
    }
    return biggest;
}

function contains(array, element) {
    if (arr.includes(element)) {
        return true;
    } else {
        return false;
    }
}

function sum(array) {
    let sum = 0;
    for (let item of array) {
        sum += item;
    }
    return sum;
}

console.log("max(arr) = " + max(arr));
console.log("contains(arr, 6) = " + contains(arr, 6));
console.log("contains(arr, 7) = " + contains(arr, 7));
console.log("sum(arr) = " + sum(arr));