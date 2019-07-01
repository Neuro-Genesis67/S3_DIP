const outlook = "Anders Jensen (EAAAANJE) <eaaaanje@students.eaax.dk>; Bodil Pedersen (EAAABOPE) <eaaabope@students.eaax.dk>; Åse Andersen (EAAAIDAN) <eaaaasan@students.eaax.dk>; Mühl Svendsen (EAAAPESV) <eaaamusv@students.eaax.dk>";

const regex = /[a-zA-Zåøæ\s]+\([A-Z]+\)\s<[a-zA-Z0-9.]+@[a-zA-Z0-9.]+>/;
const emailregex = /[a-zA-Z0-9.]+@[a-zA-Z0-9.]+/;


let arrayofppl = outlook.split(';');

arrayofppl.forEach(function (person) {

    console.log(person);
});

let theTable = document.getElementById('pplTable');

let index = 1;

arrayofppl.forEach(function (person) {
    console.log("Index" +index);
    index++;
    let personinfo = person.split(/\s\([A-Z]+\)\s/);
    let name = personinfo[0];
    let email = emailregex.exec(personinfo[1]);
    let namecol = document.createElement("th");
    let emailcol = document.createElement("th");
    let newrow = document.createElement("tr");
    namecol.innerText = name;
    emailcol.innerText = email;
    newrow.appendChild(namecol);
    newrow.appendChild(emailcol);
    theTable.appendChild(newrow);

});

