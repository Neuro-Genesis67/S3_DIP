// Lav en string variabel med en længere tekst.
// Anvend dernæst et objekt som en map til at beregne antallet af de forskellige ord i teksten.
// Brug split() metoden til at opdele teksten i ord.

let text = "Up on out on that open wayy you can be my photon daddy lie dont someone bears bear by granted you can be my photon baby dont break me down";
let words = text.split(" ").map(word => word);
console.log(words.length);