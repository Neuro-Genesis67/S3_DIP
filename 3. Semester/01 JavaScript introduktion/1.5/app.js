function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function displayPrimesUpTo(number) {
    let primes = [];
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    primes.push(number);
    console.log(primes);
}

displayPrimesUpTo(100);