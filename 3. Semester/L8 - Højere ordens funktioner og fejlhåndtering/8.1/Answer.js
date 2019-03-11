let p1 = {Navn: "Benny", Mail: "Benny@gmail.com", Tlf: "+4584269255"};
let p2 = {Navn: "Carl", Mail: "Carl@gmail.com", Tlf: "+4531716811"};
let p3 = {navn: "Abe", Mail: "Abe@gmail.com", Tlf: "+45387112567"};
let p4 = {Navn: "Griswold", Mail: "Griswold@gmail.com"};
let p5 = {Navn: "Dennis", Mail: "DennyBoy69@gmail.com", Tlf: "+723282730111"};
let arr = [p1, p2, p3, p4, p5];

// runAnswer1();
// runAnswer2();
// runAnswer3();


// Opg 8.1 - 1
function runAnswer1 () {
    console.log("Opg 8.1 - del 1");
let resultArr = arr.sort(compareFunc).map(p => p.Navn);
console.log(resultArr + "\n");
console.log("Hvorfor kommer Abe ikke med i listen?")
}

// Opg 8.1 - 2
function runAnswer2() {
    console.log("Opg 8.1 - del 2");
let arr2 = arr.filter(e => e.Tlf && e.Tlf.substring(0, 3) === "+45");
for (let p of arr2){
    delete p.Mail;
}
console.log(arr2);
}


// Opg 8.1 - 3
function runAnswer3(){
    console.log("Opg 8.1 - del 3");
    let i = 1;
    for (let p of arr){
        p.Id = i++;
    }
    console.log(arr);
}




// Functions
function compareFunc(p1, p2) {
    if (p1.Navn < p2.Navn) {
        return -1;
    } else if (p1.Navn > p2.Navn) {
        return 1;
    } else {
        return 0;
    }
}
