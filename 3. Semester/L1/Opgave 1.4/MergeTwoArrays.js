let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
let arr3 = new Array(arr1.length + arr2.length);

let i1 = 0;
let i2 = 0;
let i3 = 0;

while (i1 != arr1.length || i2 != arr2.length) {
    if (arr1[i1] <= arr2[i2]) {
        arr3[i3] = arr1[i1];
        i1++;
        i3++;
    } else {
        arr3[i3] = arr2[i2];
        i2++;
        i3++;
    }
}

while (i1 < arr1.length) {
    arr3[i] = arr[i1];
    i1++;
}

while (i2 < arr2.length) {
    arr3[i] = arr[i2];
    i2++;
}

console.log("An algorithm for interting two arrays into a new array, in sorted order:")
console.log("Array 1: " + arr1);
console.log("Array 2: " + arr2);
console.log("Array 3: " + arr3);


