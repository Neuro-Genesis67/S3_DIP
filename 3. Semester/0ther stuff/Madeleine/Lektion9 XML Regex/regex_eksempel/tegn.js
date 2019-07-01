let str = "The cat's name is Garfield";
console.log(/cat/.test(str)); // => true
console.log(str.search(/cat/)); // => 4
console.log(str.search("cat")); // => 4
console.log(str.search(/[set]/)); // => 02 Funktioner, objekter og arrays
console.log(str.search(/[e-t]/)); // => 1
