
class Person {
    constructor(name, email, telefon) {
        this.name = name;
        this.email = email;
        this.telefon = telefon;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getTelefon() {
        return this.telefon;
    }

    setName(name) {
        this.name = name;
    }

    setEmail(email) {
        this.email = email;
    }

    setTelefon(telefon) {
        this.telefon = telefon;
    }



}

let p1 = new Person("Madeleine", "made@gmail.com", "60653173");
let p2 = new Person("Steffen", "steffen@gmail.com", "Jeg ved ikke");
let p3 = new Person("Patrick", "bork@gmail.com", "Hello, I am dog");
let p4 = new Person("Douglas", "lordDouglas@gmail.com", "Bananaphone");

let ppl = [p1, p2, p3, p4];

console.log(ppl[0].getName() + " " + ppl[0].getEmail() + " " + ppl[0].getTelefon());
ppl[0].setName("Made");
ppl[0].setEmail("madeleine@gmail.com");
ppl[0].setTelefon("029510181");
console.log(ppl[0].getName() + " " + ppl[0].getEmail() + " " + ppl[0].getTelefon());