

function compare(s1, s2) {
    let counter = 0
    while (counter < s1.length && counter < s1.length) {
        if (s1[counter] > s2[counter]) {
            return -1;
        }
        else if (s1[counter] < s2[counter]) {
            return  1;
        }
        else {
            counter++;
        }
    }
    if (s1.length > s2.length) {
        return -1;
    }
    else if (s1.length < s2.length) {
        return 1;
    }

    return 0;
}

function compareLen(s1, s2) {
    if (s1.length > s2.length) {
        return 1;
    }
    else if (s1.length < s2.length) {
        return -1;
    }
    else {
        return 0;
    }
}

function compareIgnoreCase(s1, s2) {
    return compare(s1.toLowerCase(), s2.toLowerCase())
}

function bubbleSort(list) {
    for (let i = list.length -1; i >= 0; i--) {
        for (let j = 0; j <= i-1; j++) {
            if (compareIgnoreCase(list[j], list[j+1]) < 1) {
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


let s1 = "Made";
let s2 = "Steffen";
let s3 = "Mad";
let s4 = "Erik";
let s5 = "made";
let s6 = "Arne"

let ppl = [s1, s2, s3, s4, s5, s6];

console.log(compare(s1, s2));
console.log(compare(s2, s1));
console.log(compare(s1, s1));
console.log(compare(s1, s3));

console.log("--------");

console.log(compareLen(s1, s2));
console.log(compareLen(s2, s1));
console.log(compareLen(s1, s4));

console.log("-------");

console.log(compareIgnoreCase(s1, s5));

console.log(ppl);
console.log(bubbleSort(ppl));
