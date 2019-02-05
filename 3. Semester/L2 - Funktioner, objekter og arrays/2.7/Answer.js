let balanced = "[({abekat})]";
let unbalanced = "({})[";
let test = "({x})";

function balanceCheck(text) {
    let stack = [];
    let map = {"(": ")", "[": "]", "{": "}"};

    for (let c of text) {
        if (c in map) {
            stack.push(c);
        } else {
            //Not done yet
        }
    }
}

balanceCheck(test);
// balanceCheck(unbalanced);


