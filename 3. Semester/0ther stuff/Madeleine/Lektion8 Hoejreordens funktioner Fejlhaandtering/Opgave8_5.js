
let observers = [];

let subject = {};
subject['array'] = [];



subject['createObserver'] = function addObserver(nam) {
        let o = {name : nam};
        o['observe'] = function (message) {
            console.log(nam + " says hello and " + message);
        };
        this.array.push(o);
};

subject['broadcast'] = function (message) {
    this.array.forEach((o) => {
        o.observe(message);
    })
};


function addObserevr(observer) {
    observers.push(observer);
}


function createObserver( nam) {
    let t = function (message) {
        console.log(nam + " says hello and " + message);
    }
    this.array;
}

function createSubject() {
    return function (message) {
        observers.forEach((o) => {
            o(message);
        });

        }
}


subject.createObserver("Made");
subject.createObserver("Steffen");
subject.createObserver("Douglas");
subject.createObserver("Patrick");
subject.broadcast("ha en god dag");

//let sub = createSubject();
//sub("Hej hej");
//sub("Waaazzzaaaaah");


//Implementer et Observer pattern på følgende måde:
//Observers implementeres som funktioner, der kaldes, når de ”notifies”.
//Et Subject defineres som en subject funktion, der har et array med observers som lokal variabel
//Funktionen subject skal desuden definere funktionerne registerObserver og notifyObservers som
//          indre funktioner og returnere dem som metoder i et object.


//observers kan vare funktioner
//subject kan vaere noget som indholder et array