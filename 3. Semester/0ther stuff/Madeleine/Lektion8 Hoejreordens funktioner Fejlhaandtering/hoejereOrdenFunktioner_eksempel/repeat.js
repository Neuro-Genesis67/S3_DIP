// repeat.js
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);
// => 0
// => 01 JavaScript introduktion
// => 02 Funktioner, objekter og arrays

let labels = [];
repeat(4, i => labels.push(`Unit ${i + 1}`));
console.log(labels); // => [ 'Unit 01 JavaScript introduktion', 'Unit 02 Funktioner, objekter og arrays', 'Unit 3', 'Unit 4' ]
