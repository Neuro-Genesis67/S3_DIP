let oldPass;
let newPass;

let regex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
function update() {
    oldPass = document.getElementById("oldPass");
    newPass = document.getElementById("newPass");
    console.log(oldPass.value);
    console.log(newPass.value);

    if (oldPass === newPass) {
        console.log("pass 1");
        // They're identical
        let bool = regex.test(oldPass);
        console.log(bool);
        if (bool) {
            console.log("it's true hwat they say");
        }
    } else {
        //They're not identical
    }


};