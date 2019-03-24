class Person {

    constructor(cpr, name, age) {
        this.cpr = cpr;
        this.name = name;
        this.age = age;

        Person.prototype.toString = function() {
            return "| Cpr: " + this.cpr + " | Name: " + this.name + " | Age: " + this.age + " |";
        };

        Person.prototype.valueOf = function() {
            return this.cpr;
        };

        // Metoden equals(p) skal sikre, at p har Person som constructor og har samme CPR-nr som personen.
        Person.prototype.equals = function (p) {
            if (this.constructor === p.constructor) {
                if (this.valueOf() === p.valueOf()) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        };
    }
}

//___________________________________________________________________________________________________

    function compare(p1, p2) {
        if (p1.name === p2.name) {
            return 0;
        } else if (p1.name < p2.name) {
            return -1;
        } else if (p1.name > p2.name) {
            return 1;
        } else {
            console.log("compare() - Error");
        }
    };

    function printArr(arr) {
        for (let p of arr) {
            console.log("Name: " + p.name + " | Age: " + p.age + " | Cpr: " + p.cpr + "|");
        }
    }

//___________________________________________________________________________________________________

let p1 = new Person("0705912222", "Tom", "27");
let p2 = new Person("1132442314", "Adelaide", "64");
let p3 = new Person("0294719231", "Ruk", "32");
let p4 = new Person("0705912222", "Tom", "27");
let p5 = new Person("8356143745", "Madelaide", "12");

let arr = [p1, p2, p3, p4, p5];
console.log("Unsorted: ");
printArr(arr);
arr.sort(compare);
console.log("\nSorted: ");
printArr(arr);



