//Kan ikke koere i webstorm, skal console.log kan findes i browser
const usersUrl = 'https://jsonplaceholder.typicode.com/users';

let theTable = document.getElementById('ppltable');

// Med async/await
const getUsersAsync = async () => {
    let result = await fetch(usersUrl); //Hvorfor wait her og under? Venter den ikke her eller gaar den videre?
    return await result.json();
};


const printEverySecondUserAsync = async () => {
    try {
        let users = await getUsersAsync(); //skal await altid med, altid naar man bruger asynch?
        users.map((user) => {
            if (user.id === 2) {

                console.log("User found" + user.name);
                let anewrow = document.createElement("tr");
                let col1 = document.createElement("td");
                let col2 = document.createElement("td");
                col1.innerText = user.name;
                col2.innerText = user.company.name;
                anewrow.appendChild(col1);
                anewrow.appendChild(col2);
                theTable.appendChild(anewrow);
            }

        })
    }
    catch (e) {
        console.log("Error: " + e);
    }
};

// Med promises
const getUsers = () => {
    return fetch(usersUrl).then((result) => {
        return result.json() //retunerer promise
    }); //Hvordan ser man at dette er en promise? Er det bare default hvis man ikke laver en await?
};

const printEverySecondUser = () => {
    getUsers().then((users) => {
        let even = true;
        users.map((user) => {
            if (even) {
                console.log(user);
                //Lav et table og append shit
            }
            even = !even;
        })
    }).catch(error => console.log(error));
};

//printEverySecondUser();
printEverySecondUserAsync();

