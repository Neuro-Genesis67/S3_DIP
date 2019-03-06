let p1 = {Navn: "Benny", Mail: "Benny@gmail.com", Tlf: "+4584269255"};
let p2 = {Navn: "Carl", Mail: "Carl@gmail.com", Tlf: "+4531716811"};
let p3 = {navn: "Abe", Mail: "Abe@gmail.com", Tlf: "+45387112567"};
let p4 = {Navn: "Griswold", Mail: "Griswold@gmail.com"};
let p5 = {Navn: "Dennis", Mail: "DennyBoy69@gmail.com", Tlf: "+723282730111"};
let arr = [p1, p2, p3, p4, p5];
// answer1();
// answer2();
answer3();


// Opg 8.1 - 1
function answer1 () {
    console.log("Opg 8.1 - Del 1");
let arr1 = arr.sort(compareFunc).map(itemInArr => itemInArr.Navn);
console.log(arr1 + "\n");
}



// Opg 8.1 - 2
function answer2() {
let arr2 = arr.filter(e => e.Tlf && e.Tlf.substring(0, 3) === "+45");
for (let p of arr2){
    delete p.Mail; //Changed e to p, should still work.
}
console.log(arr2);
}


// Opg 8.1 - 3
function answer3(){
    let i = 1;
    for (let p of arr){
        p.Id = i++;
    }
    console.log(arr);
}




// Functions
function compareFunc(o1, o2) {
    if (o1.Navn < o2.Navn) {
        return -1;
    } else if (o1.Navn > o2.Navn) {
        return 1;
    } else if (o1.Navn === o2.Navn) {
        return 0;
    }
}
