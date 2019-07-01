console.log("Testies");

let list = ["Madeleine", "Steffen", "Douglas", "Patrick", "Bertil", "Thomas"];

for (let i = list.length -1; i >= 0; i--) {
    for (let j = 0; j <= i-1; j++) {
        if (list[j] > list[j+1]) {
            let temp = list[j];
            list[j] = list [j+1];
            list[j+1] = temp;
        }

    }





}

console.log(list);
console.log("Det skulle ikke andres andet end listen")