let bal = "[() []   {}  ()]";
let ubal = "())";

function checkBalanceDumb(s1) {
    let hard = 0;
    let soft = 0;
    let curly = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === "(") {
            soft++;
        }
        else if(s1[i] === ")") {
            soft--;
        }
        else if(s1[i] === "[") {
            hard++;
        }
        else if(s1[i] === "]") {
            hard--;
        }
        else if(s1[i] === "{") {
            curly++;
        }
        else if(s1[i] === "}") {
            curly--;
        }
    }
    if (hard + soft + curly == 0) {
        return true;
    }
    else {
        return false;
    }

}

function checkBalance(s) {
    for (let i = 0; i < s.length; i++) {
        if (typeof s[i] == "number" || typeof s[i].match(a-z)) {
            //Do nothing
        }

    }
}


console.log(checkBalance(bal));
console.log(checkBalance(ubal));



