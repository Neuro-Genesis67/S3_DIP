function Person(navn, alder, cpr) {
    this.name = navn;
    this.age = alder;
    this.cpr = cpr;
}

Person.prototype.toString = function () {
    return  this.name + " " + this.age + " (" + this.cpr + ")";
};

Person.prototype.valueOf = function () {
    return this.cpr;
}

Person.prototype.equals = function (person) {
    if (!(person instanceof Person)) {
        return "Not a person";
    }
    else {

        if (person.valueOf().localeCompare(this.cpr) == 0) {
            return "ZOMG twins!";
        }
        else {
            return "Not a match";
        }
    }
};


let compare = function(p1, p2) {
    return p1.name.localeCompare(p2.name);
}

let me = new Person("Made", 31, "870626");
let me2 = new Person("Madeleine", 31, "870626");
let notme = new Person("Douglas", 2, "20160406");

console.log(me.toString());
console.log(me.valueOf());
console.log(me.equals(me2));
console.log(me2.equals(me));
console.log(me.equals(notme));
console.log(notme.equals(20160406));
console.log(compare(me2, me));


