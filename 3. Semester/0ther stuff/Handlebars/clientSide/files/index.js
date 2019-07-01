class User {
    constructor(name, drug) {
        this.name = name;
        this.drug = drug;
    }
}
let users = [
    new User("Karlos", "Crystal meth"),
    new User("Pedro", "Kambo"),
    new User("Felicia", "Life")
];


window.addEventListener("load", async () => {
    const res = await fetch("/users.hbs");
    const text = await res.text();

    document.body.innerHTML = Handlebars.compile(text)({ users });


    // Inde i den her funktion kan DOM anvendes.
    document.getElementById('table').style.border = "2px solid black";
});



