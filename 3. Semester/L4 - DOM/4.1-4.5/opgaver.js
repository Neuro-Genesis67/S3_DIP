// 4.1
let all_p = document.querySelectorAll("p");
for (let p of all_p) {
    p.style.color = "red";
}

// 4.2
let all_h1 = document.querySelectorAll("h1");
for (let h1 of all_h1) {
    h1.nextElementSibling.nextElementSibling.style.color = "brown";
}

// 4.3
let all_li = document.querySelectorAll("li");
let id = 0;
for (let li of all_li){
    if (id % 2 === 0) {
        li.style.backgroundColor = "lightgrey";
    }
    id++;
}

// 4.4
all_h1 = document.querySelectorAll("h1");
for (let h1 of all_h1){
    let temp = h1.nextElementSibling.textContent;
    let newChild = document.createElement("h2");
    newChild.textContent = h1.nextElementSibling.textContent;
    h1.nextElementSibling.replaceWith(newChild);
}

































