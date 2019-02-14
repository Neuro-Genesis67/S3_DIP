let p1 = {Navn: "1Benny", Mail: "Benny@gmail.com", Tlf: 84269255};
let p2 = {Navn: "2Tom", Mail: "Tom@gmail.com", Tlf: 31716811};
let p3 = {Navn: "3Solvej", Mail: "Solvej@gmail.com", Tlf: 387112567};
let p4 = {Navn: "4Susanne", Mail: "Susanne@gmail.com", Tlf: 82633223};
let p5 = {Navn: "5Birger", Mail: "Birger@gmail.com", Tlf: 82730111};
let p6 = {Navn: "6Børge", Mail: "Børge@gmail.com", Tlf: 62341262};
let p7 = {Navn: "7Dennis", Mail: "Dennis@gmail.com", Tlf: 33461123};
let p8 = {Navn: "8Johan", Mail: "Johan@gmail.com", Tlf: 73652143};
let p9 = {Navn: "9Kelvin", Mail: "Kelvin@gmail.com", Tlf: 11211211};
let p10 = {Navn: "10Jimmy", Mail: "Jimmy@gmail.com", Tlf: 54253211};

let arr = [];
arr.push(p1);
arr.push(p2);
arr.push(p3);
arr.push(p4);
arr.push(p5);
console.log("\n-Starting array: \n", arr, "\n");

// Create
arr[10] = "Newly created entry into arr";
console.log("-Creating a new object at arr[10]:\n", arr, "\n");

// Read
console.log("-Reading entry 1: \n", arr[1], "\n");

// Update
arr[5] = "This entry has been update";
console.log("-Updating entry 5:\n", arr, "\n");

// delete
delete arr[1];
delete arr[3];
delete arr[5];
console.log("-Deleting 1, 3 and 5 in arr: \n", arr, "\n");

console.log("-Object.values, keys & entries:");
console.log("Object.Values: ", Object.values(p5));
console.log("Object.Keys: ", Object.keys(p5));
console.log("Object.Entries: ", Object.entries(p5));





















