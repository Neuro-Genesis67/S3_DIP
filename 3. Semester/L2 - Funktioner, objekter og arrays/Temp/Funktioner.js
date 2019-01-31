function next() {
    let n = 1;
    return function () {
        return n++;
    };
}

const next1 = next();
const next2 = next();
console.log("Testing next: ");
console.log(next1()); // => 1
console.log(next1()); // => 2
console.log(next2() + "\n"); // => 1

function navngivetFunktion(i, j) {
    return i * j;
}

const anonymFunktion = function (i, j) {
    return i * j;
}

const arrowFunktion = i => i * i + 1;

function noReturnFunktion() {
}

function noReturnValue(i) {
    if (i < 0) return; else return i;
}

function lokaleFunktioner() {
    console.log(insideFunktion());

    function insideFunktion() { // Funktionen insideFunktion() hoistes til starten af lokaleFunktioner
        return "\ninsideFunktion: " + 5;
    }

    // console.log(h()); // => ReferenceError: h is not defined
    // const h = function () {
    //     return 2;
    // };
}

function defaultValueFunktion(a, b = 77) {
    return a + b;
}


console.log("navngivetFunktion: " + navngivetFunktion(2, 5));
console.log("anonymFunktion: " + anonymFunktion(2, 5));
console.log("arrowFunktion: " + arrowFunktion(3));
console.log("noReturnFunktion: " + noReturnFunktion(10));
console.log("noReturnValue: " + noReturnValue(-1));
console.log("noReturnValue: " + noReturnValue(2));
console.log("lokaleFunktioner: " + lokaleFunktioner());
console.log("defaultValueFunktionWithDefault: " + defaultValueFunktion(5));
console.log("defaultValueFunktionOverrideDefault: " + defaultValueFunktion(5, 5));

console.log("\nafvent funktionen: ");

function afvent(v) {
    function callback() {
        console.log(v);
    }

    setTimeout(callback, 2000);
    console.log('afvent ...');
}

afvent(1);
afvent(2);
