let correct   = "whatsIn#It(one{monkey!}dancing)Joy[absoÆ^lut|ely]()";
let incorrect = "whatsIn#It}one(monkey!]dancing]Joy}absoÆ^lut|ely(]]";

function isItBalanced(data) {
    let stack  = [];
    let open   = ["(", "[", "{"];
    let closed = [")", "]", "}"];
    let pop = "";

    for (let i = 0; i < data.length-1; i++) {
        if (open.includes(data[i])) {
            stack.push(data[i]);
        } else if (closed.includes(data[i])) {
            pop = stack.pop();

            if (pop == "(" && data[i] == ")") {
                return true;
            } else if (pop == "[" && data[i] == "]") {
                return true;
            } else if (pop == "{" && data[i] == "}") {
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log("correct: " + isItBalanced(correct));
console.log("incorrect: " + isItBalanced(incorrect));
