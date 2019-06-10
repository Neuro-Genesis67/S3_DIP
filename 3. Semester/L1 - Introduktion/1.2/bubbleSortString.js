let list = ["Abe", "Zebra", "Busk", "Sofa", "Xavier", "Appelsin", "Kommode"];
console.log("Unsorted list of strings: \n" + list + "\n");

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j + 1];
            list[j + 1] = temp;
        }
    }
}
console.log("Sorted list of strings: \n" + list); // => 'Abe', 'Appelsin', 'Busk', 'Kommode', 'Sofa', 'Xavier', 'Zebra'

