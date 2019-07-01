// find.js
function isPrime(e) {
    let t = 2, limit = Math.sqrt(e);
    while (t <= limit) {
        if (e % t++ < 1) {
            return false;
        }
    }
    return e > 1;
}

console.log([4, 6, 8].find(isPrime)); // undefined
console.log([4, 5, 6].find(isPrime)); // 5
