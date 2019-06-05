let customers = document.querySelectorAll(".customer");
customers.forEach(c => c.addEventListener('click', e => {
    showNumber(e.target);
}));

let phone = document.querySelector("#phone");

function showNumber(customer) {
    let phoneNumber = customer.id;
    fetch('/' + phoneNumber)
        .then(res => res.text() )
        .then(res => phone.innerHTML = res);
}



