// Svarende til Java’s Comparator#compare(…) metode, skal der her laves nogle compare-funktioner, der
// tager to parametre, og returnerer -1, 0 eller 1 alt efter om den første parameter er mindre end, lig med
// eller større en den anden parameter.
// Der skal laves følgende compare-funktioner:
//   • compare(s1, s2): Sammenligner de to tekststrenge leksikografisk.
//   • compareLen(s1, s2): Sammenligner de to tekststrenge på deres længde
//   • compareIgnoreCase(s1, s2): Sammenligner to tekststrenge leksikografisk uden at tage hensyn til
// store og små bogstaver
// Modificer dernæst bubbleSort funktionen fra opgave 2.1, så den nu får en compare-funktion som ekstra
// parameter. Sammenligningen i bubbleSort funktionen skal nu ske med denne compare-funktion.


let compare = function(s1, s2) {
    // Checks every letter
    for (let i = 0; i < s1.length && s2.length; i++) {
        if (s1[i] < s2[i]) {
            return -1;
        } else if (s1[i] > s2[i]) {
            return 1;
        }
    }

    if (s1.length < s2.length) {
        return -1;
    } else if (s1.length > s2.length) {
        return 1;
    }
    return 0;
}


function compareLen(s1, s2) {
    if (s1.length > s2.length) {
        return 1;
    } else if (s1.length < s2.length) {
        return -1;
    } else {
        return 0;
    }
}


let compareIgnoreCase = function(s1, s2) {
let x1 = s1.toLowerCase();
let x2 = s2.toLowerCase();

    // Checks every letter
    for (let i = 0; i < x1.length && x2.length; i++) {
        if (x1[i] < x2[i]) {
            return -1;
        } else if (x1[i] > x2[i]) {
            return 1;
        }
    }

    if (x1.length < x2.length) {
        return -1;
    } else if (x1.length > x2.length) {
        return 1;
    }
    return 0;
}


let bubbleSort = function(comparator, list) {
    for (let i = list.length-1; i >= 1; i--) {  // i = 0 1 2 3 4
        for (let j = 0; j < i; j++) { //           j = 0 1 2 3
            if (comparator(list[j], list[j+1]) == 1) {
                swap(j, j+1);
            }
        }
    }

    function swap(a, b) {
        let temp = list[a];
        list[a] = list[b];
        list[b] = temp;
    }
}


let words = ["bryg", "bums", "daggert", "aske", "abe"];
console.log(words);
bubbleSort(compare, words);
console.log(words);

console.log(compare("anders", "babel"));
console.log(compare("babel", "anders"));
console.log(compare("Andersine", "andersine"));
console.log(compare("tom", "anders"));
console.log(compare("TOM", "anders"));
// Store bogstaver kommer først (lexicografisk orden)

console.log(compareLen("Siguard", "Tom"));
console.log(compareLen("Ane", "Tom"));
console.log(compareLen("Tom", "Thomas"));

console.log(compareIgnoreCase("TOM", "tom"));
console.log(compareIgnoreCase("Anders", "Andersine"));
console.log(compareIgnoreCase("TOM", "Sørine"));
