let listOafsnit = document.querySelectorAll("p");

for (let li of listOafsnit) {
    li.style.color = 'red';
};



let headers = document.querySelectorAll("h1");

for (let h of headers) {
    let i = h.nextElementSibling.nextElementSibling;
    i.style.color = 'brown';
}

let li = document.querySelector("ul");



let ols = li.querySelectorAll("li");


let temp = 0;
for (let o of ols) {
    o.style.backgroundColor = temp % 2===0 ? 'pink' : 'none';

    temp++;
}

let body = document.querySelector("body");

for (let t of headers) {
    let s = t.nextElementSibling;
    let temp2 = document.createElement("h2");
    temp2.innerHTML = s.innerHTML;
    document.body.replaceChild(temp2, s);
}

let counter = 1;

let head = document.querySelector("h1");

for (let hu of headers) {
    hu.id = counter;
    let temp3 = document.createElement("a");
    temp3.innerHTML = hu.innerHTML;
    console.log(hu.id);
    let tempid = "#" + counter;
    temp3.setAttribute("href", tempid);
    body.insertBefore(temp3, head);
    counter++;
}

