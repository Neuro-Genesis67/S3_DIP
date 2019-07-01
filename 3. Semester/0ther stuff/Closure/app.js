class Stampcollector {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stampers = [];
        this.enqueue = function(item) {
            stampers.push(item);
        }
        this.dequeue = function() {
            console.log("Removing: " + stampers.dequeue());
        }

    }



}

// let me = new Stampcollector("Tom", 28);


//
// class Polygon {
//     constructor() {
//         this.name = "Polygon";
//     }
// }












// const passed = 10;
//
// const addTo = function() {
//     let inner = 02 Funktioner, objekter og arrays;
//     return passed + inner;
// };
//
// console.log(addTo());


// var addTo = function(passed) {
//     var add = function(inner) {
//         return passed + inner;
//     };
//
//     return add;
// };
//
// var addThree = addTo(3);
// var addFour = addTo(4);
//
// console.dir(addThree);
// console.log(addFour);