function opdaterUr() {
    let ur = document.querySelector("input");
    console.log(new Date().toLocaleTimeString());
    ur.value = new Date().toLocaleTimeString();
    setTimeout(opdaterUr, 1000);
}

onload = opdaterUr;


