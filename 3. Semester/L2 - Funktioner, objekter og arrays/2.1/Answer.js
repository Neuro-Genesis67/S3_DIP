let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];
console.log("Before sorting:", list);
bubbleSort(list);
console.log("After sorting: ", list);
console.log("Searching for 3: ", binarySearch(list, 3));
console.log("Searching for 13: ", binarySearch(list, 13));

function swap(array, j) {
    if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
    }
}

function bubbleSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            swap(array, j);
        }
    }
}

function binarySearch(array, element) {
    let first = 0;
    let last = array.length;
    let mid = Math.trunc((first + last) / 2);

    while (first <= last) {
        //Hvis search er større end mid
        if (element > array[mid]) {
            first = mid + 1;
        } else if (array[mid] === element) {
            return array[mid];
        } else {
            last = mid - 1;
        }
        mid = Math.trunc((first + last) / 2);
    }
    //Element not found
    if (first > last) {
        return -1;
    }
}

