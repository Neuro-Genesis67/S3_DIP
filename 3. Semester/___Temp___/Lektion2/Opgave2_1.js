console.log("Testies");

let list = ["Madeleine", "Steffen", "Douglas", "Patrick", "Bertil", "Thomas"];



console.log("Name list:")
console.log(list);
console.log("Sorted names:")
console.log(bubbleSort(list));

console.log("Search for Maja... to bad she is in Australia....")
console.log(binarySearch(list, "Maja"));

console.log();
console.log("Numbers time!");
let list2 = [1,2,3,4,5,6,7,8,9];
console.log("A sorted list of numbers;")
console.log(list2);

console.log("Does it have 5?")
console.log(binarySearch(list2, 5));
console.log("Does it have 10?")
console.log(binarySearch(list2, 10));




function binarySearch(list, target) {
    let found = false;
    let left = 0;
    let right = list.length-1;
    let mid = -1; // eller bare ikke noget?
    let current;
    while (!found && left <= right) {
        mid = Math.floor((left + right) / 2);
        current =list[mid];
        if (current == target) {
            found = true;
        }
        else if ( current > target) {
            right = mid - 1;
        }
        else {
            left = mid +1;
        }

    }
    if (found) {
        return current;
    }
    else {
        return "Not found";
    }

}

function bubbleSort(list) {
    for (let i = list.length -1; i >= 0; i--) {
        for (let j = 0; j <= i-1; j++) {
            if (list[j] > list[j+1]) {
                list = swap(list, j);
            }

        }
    }
    return list;
}

function swap(list, j) {
    let temp = list[j];
    list[j] = list [j+1];
    list[j+1] = temp;
    return list
}