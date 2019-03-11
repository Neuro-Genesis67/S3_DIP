const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let theTable = document.querySelector("table");

for (let m of MOUNTAINS) {
    let temp = document.createElement("tr");
    let tempN = document.createElement("td");
    tempN.innerHTML = m.name;
    temp.appendChild(tempN);
    let tempH = document.createElement("td");
    tempH.innerHTML = m.height;
    temp.appendChild(tempH);
    let tempP = document.createElement("td");
    tempP.innerHTML = m.place;
    temp.appendChild(tempP);
    theTable.appendChild(temp);
}
