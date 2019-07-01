let list1 = ["Ann", "Bertil","Camilla", "Maja", "Thomas"];
let list2 = ["Douglas", "Madeleine", "Patrick", "Steffen"];

console.log(totalfletning(list1, list2));

function totalfletning(list1, list2) {
    let list = [];
    let i1 = 0;
    let i2 = 0;


    while (i1 < list1.length && i2 < list2.length) {
        if (list1[i1] < list2[i2]) {
            list[i1+i2]=list1[i1];
            i1++;
        }
        else {
            list[i1+i2] = list2[i2];
            i2++;
        }
    }

    while (i1 < list1.length) {
        list[i1+i2] = list1[i1];
        i1++;
    }
    while (i2 < list2.length) {
        list[i1+i2] = list1[i2];
        i2++;
    }

    return list;

}