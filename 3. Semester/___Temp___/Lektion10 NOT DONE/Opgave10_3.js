class Hund {
    constructor(navn) {
        this.name = navn;
    }

    toString () {
        return this.name;
    }
}

class Kat {
    constructor(navn) {
        this.name = navn;
    }
    toString () {
        return this.name;
    }

}

let pets = ["Douglas", "Patrick", "Oden", "Tisse", "Freja"];
let cats = [];
let dogs = [];

console.log(pets);
for (let i = 0; i < pets.length; i++) {
    if(i%2==0) {
        dogs.push(new Hund(pets[i]));
    }
    else {
        cats.push(new Kat(pets[i]));
    }
}
console.log("Hunde:" + dogs);
console.log("Kat: " + cats);