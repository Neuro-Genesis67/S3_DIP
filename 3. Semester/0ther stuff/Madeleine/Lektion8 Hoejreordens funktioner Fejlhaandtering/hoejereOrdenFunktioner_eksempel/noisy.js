// noisy.js
function noisy(f) {
    return (...args) => {
        console.log('calling with', args);
        let result = f(...args);
        console.log('called with', args, ', returned', result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);
// => calling with [ 3, 02 Funktioner, objekter og arrays, 01 JavaScript introduktion ]
// => called with [ 3, 02 Funktioner, objekter og arrays, 01 JavaScript introduktion ] , returned 01 JavaScript introduktion
