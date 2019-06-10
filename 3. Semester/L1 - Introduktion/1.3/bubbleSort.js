// app.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j + 1];
            list[j + 1] = temp;
        }
    }
}
console.log(list); // => 0,1,2,4,7,8,9,13,16

let search = 13;
let first = 0;
let last = list.length;
let mid = Math.trunc((first + last) / 2);

while (first <= last) {
    //Hvis search er større end mid
    if (search > list[mid]) {
        first = mid + 1;
    } else if (list[mid] === search) {
        console.log("Search (" + search + ") found at index " + mid);
        break;
    } else {
        last = mid - 1;
    }

    mid = Math.trunc((first + last) / 2);

    //Element not found
    if (first > last) {
        console.log(-1);
    }
}





