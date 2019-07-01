let regex = /-/;
//password skal vaere min 9 tegn og inholde bostaver, cifre OG specialtegn

let button = document.getElementById("checkbtn");

button.onclick = function () {
    let password1 = document.getElementById('pass1').value;
    let password2 = document.getElementById('pass2').value;
    if(password1 !== password2) {
        alert("Passwords do not match");
    }
    else if (password1.length < 9) {
        alert("Password to short");
    }
    else if (password1.match(/[A-Z]|[a-z]|[åøæÅØÆ]/) && password1.match(/[0-9]/)
        && password1.match(/[\&\[\]\{\}\!\"\€\#]/)) { //Kunne nok vaere lide flere
        alert("Match");
    }
    else {
        alert("Ugylgigt password");
    }

};