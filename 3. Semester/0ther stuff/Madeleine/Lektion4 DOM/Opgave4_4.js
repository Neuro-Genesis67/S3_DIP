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

let para = document.querySelectorAll("h1 + p");

for (let t of headers) {
    let s = t.nextElementSibling;
    let temp2 = document.createElement("h2");
    temp2.innerHTML = s.innerHTML;
    document.body.replaceChild(temp2, s);


}
