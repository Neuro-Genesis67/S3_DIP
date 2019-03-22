const regex = /([^(]+)[^<]+<([^>]+)>;/g;
const outlook =
    "Anders Jensen (EAAAANJE) <eaaaanje@students.eaax.dk>;" +
    "Bodil Pedersen (EAAABOPE) <eaaabope@students.eaax.dk>;" +
    "Åse Andersen (EAAAIDAN) <eaaaasan@students.eaax.dk>;" +
    "Mühl Svendsen (EAAAPESV) <eaaamusv@students.eaax.dk>;";

let result;
let html = "";

while (result = regex.exec(outlook)) {
    html += "<tr>" + "<td>" + result[1] + "</td>" + "<td>" + result[2] + "</td>" + "</tr>";
}

document.body.innerHTML += "<table><tr><th>Name</th><th>Mail</th></tr>" + html + "</table>";





// document.body.innerText = html;?


