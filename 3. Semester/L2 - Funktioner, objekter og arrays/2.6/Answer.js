let arr = [9, 8, 7, 6, 1, 2, 3, 4, 5];
bubbleSort(arr, compare());

// console.log(arr);


function swap(array, j) {
    if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
    }
}

function bubbleSort(array, compy) {

    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            let s1 = arr[j];
            let s2 = arr[j + 1];
            if (compy(s1, s2) === 1) {
                // swap(array, j);
                console.log("Bingo!!!!!!!!!!!!!!!!!!!");
            }
        }
    }
}


function compare(s1, s2) {
    if (s1 < s2) {
        return -1;
    } else if (s1 === s2) {
        return 0;
    } else {
        return 1;
    }
}

function compareLen(s1, s2) {
    if (s1.length < s2.length) {
        return -1;
    } else if (s1.length === s2.length) {
        return 0;
    } else {
        return 1;
    }
}

function compareIgnoreCase(s1, s2) {
    if (s1.toLowerCase() < s2.toLowerCase()) {
        return -1;
    } else if (s1.toLowerCase() === s2.toLowerCase()) {
        return 0;
    } else {
        return 1;
    }
}

//Testing

// //compare(s1, s2):
// console.log(compare("Ane", "Anemone"));
// console.log(compare("Ane", "Ane"));
// console.log(compare("Anemone", "Ane"));
// console.log("\n");
//
// //compareLen(s1, s2):
// console.log(compareLen("Ane", "Anemone"));
// console.log(compareLen("Ane", "ane"));
// console.log(compareLen("ZXR 750", "Abe"));
// console.log("\n");
//
// //compareIgnoreCase(s1, s2):
// console.log(compareIgnoreCase("Ane", "anemone"));
// console.log(compareIgnoreCase("AbCdE", "abCdE"));
// console.log(compareIgnoreCase("arrangementsopdigter", "Arrangement"));
// console.log("\n");

//
// compare(s1, s2): Sammenligner de to tekststrenge leksikografisk.
// • compareLen(s1, s2): Sammenligner de to tekststrenge på deres længde
// • compareIgnoreCase(s1, s2): Sammenligner to tekststrenge leksikografisk uden at tage hensyn til
// store og små bogstaver


//Lexicographically ordered strings: AAAAA, AAAAB, AAABA, AAABB, etc.