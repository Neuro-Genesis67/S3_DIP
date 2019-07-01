let iamalist = ["Bo", "Madeleine", "Steffen", "Douglas", "Patrick", "Malin", "Annemette"];


let compFuncLen = generateSortFunc(compareLength);
let compFuncIgn = generateSortFunc(compareIgnoreCase);
console.log(iamalist);
compFuncIgn(iamalist);

console.log(iamalist);

function compareLength(o1, o2) {
    if (o1.length > o2.length) {
        return 1;
    }
    else if (o2.length > o1.length) {
        return -1;
    }
    else {
        return 0;
    }
}

function compareIgnoreCase(o1, o2) {
    if(o1.toLowerCase() < o2.toLowerCase()) {
        return 1;
    }
    else if (o2.toLowerCase() < o1.toLowerCase()) {
        return -1;
    }
    else {
        return 0;
    }
}


function bubbleSort(list, compator) {
    for (let i = list.length -1; i >= 0; i--) {
        for (let j = 0; j <= i-1; j++) {
            if (compator(list[j], list[j+1]) < 1) {
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

function generateSortFunc(comparator) {
    return function sort(list) {
        for (let i = list.length -1; i >= 0; i--) {
            for (let j = 0; j <= i-1; j++) {
                if (comparator(list[j], list[j+1]) < 1) {
                    list = swap(list, j);
                }

            }
        }
    }
}