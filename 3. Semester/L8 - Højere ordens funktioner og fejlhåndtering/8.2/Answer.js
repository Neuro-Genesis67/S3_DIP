let list = ["Tom", "Steffen", "Abe", "Maximillian", "Thomas", "Ib"];
let list2 = list;
let sortLen = generateSortFunc(compareLength);
let sortIgn = generateSortFunc(compareIgnoreCase);

answerCompLen();
answerCompIgnoreCase();


// Functions
function answerCompLen (){
    console.log("---Sorting by length---");
    console.log("Original list:");
    console.log(list);
    sortLen(list);
    console.log("Sorted by length:");
    console.log(list);
}

function answerCompIgnoreCase (){
    console.log("\n---Sorting with ignoreCase---");
    console.log("Original list:");
    console.log(list2);
    sortIgn(list2);
    console.log("Sorted by ignoreCase:");
    console.log(list2);
}

function generateSortFunc(comparator){
    return function sort(list) {
        for (let i = list.length-1; i >= 0; i--) {
            for (let j = 0; j < i; j++) { // -1?
                if (comparator(list[j], list[j+1]) > 0) {
                   list = swap(list, j);
                }
            }
        }
    }
}

function swap(list, j) {
    let first = list[j];
    list[j] = list[j+1];
    list[j+1] = first;
    return list;
}

function compareLength(p1, p2) {
    if (p1.length > p2.length) {
        return 1;
    } else if (p1.length < p2.length) {
        return -1;
    } else {
        return 0;
    }
}
function compareIgnoreCase(p1, p2) {
    if (p1.toLowerCase() < p2.toLowerCase()) {
        return -1;
    } else if (p1.toLowerCase() > p2.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
}
