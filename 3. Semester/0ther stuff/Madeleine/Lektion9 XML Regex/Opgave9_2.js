
onload = () => {

    let field = document.querySelector("#dato");
    field.style.backgroundColor = "blue";

    let butt = document.querySelector("button");
    if (butt != null) {
        console.log("Button!");
    }
    else {
        console.log("No button");
    };

    butt.onclick = dateCheckButton;


    function dateCheckButton() {
        let reg = /\d{1,4}-[0-1][0-9]-[0-3][0-9]/;
        let text = field.value;
        console.log(text);
        if (text.match(reg)) {
            field.style.backgroundColor = "green";
        }
        else {
            field.style.backgroundColor = "red";
        }

    }
};


