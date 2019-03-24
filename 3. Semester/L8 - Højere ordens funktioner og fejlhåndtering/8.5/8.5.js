// Implementer et Observer pattern på følgende måde:
// • Observers implementeres som funktioner, der kaldes, når de ”notifies”.
// • Et Subject defineres som en subject funktion, der har et array med receivers som lokal variabel
// • Funktionen subject skal desuden definere funktionerne registerObserver og notifyObservers som
// indre funktioner og returnere dem som metoder i et object.
//     Afprøv implementationen med et par receivers.

let subject = {};

subject['arr'] = [];

subject['registerObserver'] = function (name) {
    let person = {name: name};
    person['receive'] = function (message) {
        console.log(name + " has received the message: " + message);
    }; //Semicolon here?
    this.arr.push(person);
    console.log(name + " has been registered as a receiver");
};

subject['notifyObservers'] = function (message) {
    this.arr.forEach( (p) => {
        p.receive(message);
    })
};

subject.registerObserver("Thomas");
subject.registerObserver("Pedro");
subject.notifyObservers("Madeleine er sej.");
