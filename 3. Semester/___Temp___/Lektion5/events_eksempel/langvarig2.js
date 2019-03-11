function langvarig(event) {
    let start = Date.now();
    event.stopPropagation();
    while (true){
        let nu = Date.now();
        if ((nu - start) >= 2000) return;
    }
}

onload = () => {
    let knap = document.querySelector("button");
    knap.onclick = langvarig;
    onclick = event => console.log(event.type);
};

