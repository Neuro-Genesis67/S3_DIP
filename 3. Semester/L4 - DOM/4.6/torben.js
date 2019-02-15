let mountainTable = document.body.insertAdjacentElement('afterBegin', document.createElement('table'));
mountainTable.innerHTML =
    "<tr>" +
       + "<th>name</th>"
       + "<th>height</th>"
       + "<th>place</th>"
    "</tr>";
mountainTable.style.border = 'blue solid';
mountainTable.style.borderCollapse = 'collapse';
for (let mountain of listOfMountains) {
    mountainTable.innerHTML +=
        "<tr style='border: blue solid'>"
            + "<td style='border: blue solid' style='border-collapse: collapse;'>" + mountain.name   + "</td>"
            + "<td style='border: blue solid' style='border-collapse: collapse;'>" + mountain.height + "</td>"
            + "<td style='border: blue solid' style='border-collapse: collapse;'>" + mountain.place  + "</td>"
        + "</tr>"
}


// <th> Table header
// <tr> Table row
// <td> Table data