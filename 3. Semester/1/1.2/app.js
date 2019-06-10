// Lav en ny udgave af bubbleSort.js hvor der nu sorteres på et array af tekststrenge.
// Hvor meget skal der ændres?

let numberArray = [7, 13, 9, 8, 4, 1, 2, 16, 0];
let stringArray = ["flaskehals", "abe", "Citron", "guitar", "mowgli", "Abe", "bedemand", "citron", "glad"]

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

function bubbleSortStrings(array) {
    for (let i = array.length-1; i >= 0; i--) {
        for (let j = 0; j <= i-1; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

console.log("\n\n--- BubbleSort with numbers ---");
console.log("Before sorting: \n" + numberArray + "\n");
bubbleSortNumbers(numberArray);
console.log("After sorting: \n" + numberArray);
console.log("-------------------------------\n");


console.log("\n--- BubbleSort with strings ---");
console.log("Before sorting: \n" + stringArray + "\n");
bubbleSortStrings(stringArray);
console.log("After sorting: \n" + stringArray);
console.log("-------------------------------\n");

