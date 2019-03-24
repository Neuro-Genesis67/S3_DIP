let p1 = new Person("0705912222", "Tom", "27");
console.log(p1.valueOf());

Person.prototype.toString = function() {
    return "| Cpr: " + this.cpr + " | Name: " + this.name + " | Age: " + this.age + " |";
};

Person.prototype.valueOf = function() {
    return this.cpr;
};











class Person {
   cpr;
   name;
   age;

    constructor(cpr, name, age) {
        this.cpr = cpr;
        this.name = name;
        this.age = age;
    }

}


