function Person(navn) {
    this.navn = navn;
    Person.antal++
}
Person.antal = 0;
Person.prototype.toString = function () {
    return this.navn;
};

var person = new Person('NN');
console.log(Person.antal); // => 1
console.log(person.toString()); // => NN

console.log(person.constructor === Person); // => true
console.log(person.constructor); // => { [Function: Person] antal: 1 }
console.log(person.toString.toString());
//  =>  function () {
//          return this.navn;
//      }
