function langvarig() {
    let start = Date.now();
    while (true){
        let nu = Date.now();
        if ((nu - start) >= 2000) return;
    }
}

onload = () => {
    let knap = document.querySelector("button");
    knap.onclick = langvarig;
};

