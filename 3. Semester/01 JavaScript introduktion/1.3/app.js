// Udvid eksemplet bubbleSort.js med en binær søgning på indholdet af list,
// efter at list er blevet sorteret. Test dernæst med forskellige tal.
// Udskriv med console.log tallets position i listen eller -1, hvis elementet ikke er i listen.

let numberArray = [7, 13, 9, 8, 4, 1, 2, 16, 0];
// index           0  1   2  3  4  5  6  7   8
// Sorted          0  1   2  4  7  8  9  13  16

function bubbleSortNumbers(array) {
    for (let i = array.length-1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

function binarySearch(list, search) {
    let first = 0;
    let last = list.length;
    let middle = Math.trunc((first + last) / 2);

    while (first <= last) {
        if (search < list[middle]) {
            last = middle-1;

        } else if (search === list[middle]) {
            return search + " was found at index " + middle;

        } else {
            first = middle+1;
        }

        if (first > last) {
            return -1;
        }
        middle = Math.trunc((first + last) / 2);
    }
}




console.log("\n\n--- BubbleSort with numbers");
console.log("Before sorting: " + numberArray);
bubbleSortNumbers(numberArray);
console.log("After sorting:  " + numberArray);
console.log("-------------------------------\n");

console.log("--- Binary search");
console.log(binarySearch(numberArray, 1));
console.log(binarySearch(numberArray, 2));
console.log(binarySearch(numberArray, 3));
console.log(binarySearch(numberArray, 4));
console.log(binarySearch(numberArray, 5));
console.log(binarySearch(numberArray, 6));
console.log(binarySearch(numberArray, 7));
console.log(binarySearch(numberArray, 8));
console.log(binarySearch(numberArray, 9));
console.log(binarySearch(numberArray, 10));
console.log("-------------------------------\n");


