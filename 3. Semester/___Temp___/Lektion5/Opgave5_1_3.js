

onload = () => {
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
}