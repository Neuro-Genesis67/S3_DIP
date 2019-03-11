// abstraktion.js
function bubbleSort(array, compare){
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compare(list[j], list[j + 1]) > 0) {
                [list[j], list[j+1]] = [list[j+1], list[j]]
            }
        }
    }
}

let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];
bubbleSort(list, (m, n) => m-n);
console.log(list); // => [ 0, 1, 2, 4, 7, 8, 9, 13, 16 ]
