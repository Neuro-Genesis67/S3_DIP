

findPrime(10);

function findPrime(end) {
    let n = 1;

    while (n < end) {
        for (let i = 1; i < n; i++) {
            if (n%i == 0) {
                n++;
                break;
            }
        }
        console.log(n);
        n++;
    }


}