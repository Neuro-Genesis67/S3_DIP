let ppl = [{name: "Madeleine", email: "madeleine@gmail.com", telefon : "60653173"},
    {name: "Steffen", email: "steffen@gmail.com", telefon : "004550607081"},
    {name: "Douglas", email: "lordDoug@gmail.com", telefon: "No phone, only dog"},
    {name: "Patrick", email: "not_a_cat@gmail.com", telefon: "00450118999881999119725 3"}];

console.log(ppl);

ppl[1].email = "slyngel@gmail.com";


console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
console.log(ppl);
console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
danishPhone(ppl, console.log);

console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
addID(ppl);
console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
console.log(ppl);


function danishPhone(list, logger){
    let l = list.filter((person) => {
        return person.telefon.startsWith("0045");
    });
    logger(l)
}




function addID(peeps) {
    for (let i = 0; i <peeps.length; i++) {
        peeps[i].id = i+1;

    }

};

