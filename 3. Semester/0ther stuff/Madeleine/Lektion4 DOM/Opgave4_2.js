let listOafsnit = document.querySelectorAll("p");

for (let li of listOafsnit) {
    li.style.color = 'red';
};



let headers = document.querySelectorAll("h1");

for (let h of headers) {
    let i = h.nextElementSibling.nextElementSibling;
    i.style.color = 'brown';
}
