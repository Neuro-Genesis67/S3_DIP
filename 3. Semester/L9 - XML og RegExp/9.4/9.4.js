setInterval(update, 300);

let regex = /(?=.*[-_!"#¤%&\/()@])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
function update() {
    let oldPass = document.getElementById("oldPass").value;
    let newPass = document.getElementById("newPass").value;

    if (oldPass === newPass) {
        console.log("Passwords are identical");

        if (regex.test(oldPass)) {
            console.log("Regex matches");
            document.getElementById("oldPass").style.backgroundColor = "green";
            document.getElementById("newPass").style.backgroundColor = "green";
        }
    } else {
        //They're not identical
        document.getElementById("oldPass").style.backgroundColor = "red";
        document.getElementById("newPass").style.backgroundColor = "red";
    }


};