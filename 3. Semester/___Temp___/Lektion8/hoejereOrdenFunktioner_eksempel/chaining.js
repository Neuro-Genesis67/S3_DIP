// chaining.js
let personer = [{navn: 'Åge', alder: 32}, {navn: 'Ida', alder: 23}];

console.log(personer.map(o => o.alder).reduce((a, e) => a+e)); // => 55

console.log(personer.sort((o1, o2) => o1.alder-o2.alder).map(o => o.navn));
// => [ 'Ida', 'Åge' ]

function harNavn(navn) {
    return o => o.navn == navn;
}
console.log(personer.find(harNavn('Ida')).alder); // => 23

