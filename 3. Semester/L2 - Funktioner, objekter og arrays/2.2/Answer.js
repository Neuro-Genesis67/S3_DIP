function max(array) {
    let temp;
    let biggest = -1;

    for (let i in array) {
        temp = array[i];
        if (temp > biggest) {
            biggest = temp;
        }
    }
    return biggest;
}

function contains(array, element) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

function sum(array) {
    let total = 0;
    for (let i of array) {
        total += i;
    }
    return total;
}


let arr = [22, 24, 55, 1, 3, 99, 105, 209];
console.log("Biggest value in arr: ", max(arr));
console.log("Does the arr contain 105: ", contains(arr, 99));
console.log("Sum of arr: ", sum(arr));


// max(array): returnerer det største element i arrayet.
// • contains(array, element): returnerer true hvis elementet findes i arrayet, ellers false
// • sum(array): returnerer summen af elementerne i arrayet.