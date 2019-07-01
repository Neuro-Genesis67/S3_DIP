class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}


let persons = [];

// CREATE
persons.push(new Person("Tom",   "Tom@gmail.com",   "31716811"));
persons.push(new Person("Stine", "Stine@gmail.com", "55984785"));
persons.push(new Person("Martin","Martin@gmail.com","85126651"));
persons.push(new Person("Peter", "Peter@gmail.com", "99283746"));
persons.push(new Person("Julia", "Julia@gmail.com", "61425364"));
console.log("CREATE = ");
console.log(persons);

// READ
console.log("\nREAD: ")
console.log(persons[3]);

// UPDATE
console.log("\nUPDATE: ")
persons[3].name = "Herbert";
persons[3].email = "Herbert@gmail.com";
console.log(persons[3]);

// DELETE
console.log("\nDELETE: ");
delete persons[2];
delete persons[3];
delete persons[4];
console.log(persons);

