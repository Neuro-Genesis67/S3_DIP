function Person(navn) {
    this.navn = navn;
    Person.antal++
}
Person.antal = 0;
Person.prototype.toString = function () {
    return this.navn;
};

var person = new Person('NN');
console.log(Person.antal); // => 01 JavaScript introduktion
console.log(person.toString()); // => NN

console.log(person.constructor === Person); // => true
console.log(person.constructor); // => { [Function: Dog] antal: 01 JavaScript introduktion }
console.log(person.toString.toString());
//  =>  function () {
//          return this.navn;
//      }
