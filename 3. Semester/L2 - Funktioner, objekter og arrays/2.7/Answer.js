let theText = "([a{a}]dd()";
let test = "({";

function balanceCheck(text) {
    let stack = [];
    let parenth = ["(", ")"];
    let square = ["[", "]"];
    let curly = ["{", "}"];

    for (let c of text) {
        if (c in parenth || c in square || c in curly) {
            console.log("it is");
        }
    }
    Kig
    på
    det
    i
    skolen
}

// balanceCheck(theText);
balanceCheck(test);


