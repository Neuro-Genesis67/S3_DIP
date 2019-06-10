let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
let result = [];

let i1 = 0;
let i2 = 0;

function mergeArrays(arr1, arr2) {
    while (i1 != arr1.length || i2 != arr2.length) {
        if (arr1[i1] <= arr2[i2]) {
            result.push(arr1[i1]);
            i1++;
        } else {
            result.push(arr2[i2]);
            i2++;
        }
    }

    while (i1 < arr1.length) {
        result.push(arr1[i1]);
        i1++;
    }

    while (i2 < arr2.length) {
        result.push(arr2[i2]);
        i2++;
    }
}
console.log("arr1: " + arr1);
console.log("arr2: " + arr2);
mergeArrays(arr1, arr2);
console.log("mergeArrays(arr1, arr2): " + result);
