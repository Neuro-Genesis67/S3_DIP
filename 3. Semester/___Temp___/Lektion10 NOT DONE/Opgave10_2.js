class Dog {
    constructor(navn, breed) {
        this.name = navn;
        this.breed = breed;
    }
}

let dogs = [new Dog("Douglas", "Corgi/Lab/Dachs"),
            new Dog("Patrick", "Beagle/jackrussel/farmdog"),
            new Dog("Seb", "Alaskan Malamute"),
            new Dog("Freja", "Sibirian Husky"),
            new Dog("Oden", "German Shepard"),
            new Dog("Tisse", "Cat")];

let compare = function(p1, p2) {
    return p1.name.localeCompare(p2.name);
};

let bubbleSort = function(list) {
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (list[j].name > list[j + 1].name) {
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
};

console.log(dogs);
console.log("-----");
bubbleSort(dogs);
console.log(dogs);