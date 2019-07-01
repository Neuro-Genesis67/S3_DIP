// Modificer løsningen til opgave 1.3, så algoritmerne nu pakkes ind i funktioner med signaturerne:
// • bubbleSort(array)
// • binarySearch(array, element)
// Gør desuden swap-delen af bubbleSort til en lokal funktion swap(i, j).

let numbers = [7, 13, 9, 8, 4, 1, 2, 16, 0];
// index           0  1   2  3  4  5  6  7   8
// Sorted          0  1   2  4  7  8  9  13  16

function bubbleSort(array) {
    for (let i = array.length-1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
               swap(j, j+1);
            }
        }
    }

    function swap(i, j) {
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }
}


function binarySearch(array, element) {
    let first = 0;
    let last = array.length;
    let middle = Math.trunc((first + last) / 2);

    while (first <= last) {
        if (element < array[middle]) {
            last = middle-1;

        } else if (element === array[middle]) {
            return element + " was found at index " + middle;

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
console.log("Before sorting: \n" + numbers + "\n");
bubbleSort(numbers);
console.log("After sorting: \n" + numbers);
console.log("-------------------------------\n");

console.log("\n\n--- Binary search           ---");
console.log(binarySearch(numbers, 1));
console.log(binarySearch(numbers, 2));
console.log(binarySearch(numbers, 3));
console.log(binarySearch(numbers, 4));
console.log(binarySearch(numbers, 5));
console.log(binarySearch(numbers, 6));
console.log(binarySearch(numbers, 7));
console.log(binarySearch(numbers, 8));
console.log(binarySearch(numbers, 9));
console.log(binarySearch(numbers, 10));
console.log("-------------------------------\n");


