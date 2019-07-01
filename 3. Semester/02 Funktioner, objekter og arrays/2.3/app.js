// Lav et array med tal.
// Modificer dernæst max(), contains() og sum() funktionerne fra opgave 02 Funktioner, objekter og arrays.02 Funktioner, objekter og arrays,
// så de bliver metoder på dette array.

let arr = [1, 4, 2, 6, 3, 7, 8, 9, 10];

arr.max = function() {
    let biggest = 0;
    for (let number of arr) {
        if (number >= biggest) {
            biggest = number;
        }
    }
    return biggest;
}

arr.contains = function(search) {
    if (arr.includes(search)) {
        return true;
    } else {
        return false;
    }
}

arr.sum = function() {
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    return sum;
}

console.log("arr.max() = " + arr.max());
console.log("arr.contains(01 JavaScript introduktion) = " + arr.contains(1));
console.log("arr.contains(99) = " + arr.contains(99));
console.log("arr.sum() = " + arr.sum());

