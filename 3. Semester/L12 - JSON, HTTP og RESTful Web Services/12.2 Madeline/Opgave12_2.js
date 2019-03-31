getMessages = () => {
    let roomname = document.getElementById('roomname').value;
    fetch(`https://dip-chat-server.herokuapp.com/api/messages/${roomname}`).then(function (result) {
        result.json().then(function (jason) {
            let table = document.getElementById("sexybody");
            table.innerHTML ="";
            jason.forEach(function (message) {
                let row = document.createElement("tr");
                let namecol = document.createElement("td");
                let msgcol = document.createElement("td");
                msgcol.innerText = message.text;
                namecol.innerText = message.name;
                row.appendChild(namecol);
                row.appendChild(msgcol);
                table.appendChild(row);
            })
        });
    }); //retunerer promise
};

sendMessage = () => {
    let roomname = document.getElementById('roomname').value;
   let messagetext = document.getElementById("messageout").value;
   console.log(messagetext);
   let message = {name: "Made", roomName: roomname, text: messagetext};
   fetch("https://dip-chat-server.herokuapp.com/api/messages/", {method: "POST", body: JSON.stringify(message), headers:{
           'Content-Type': 'application/json'
       }}).then(function () {
       getMessages();
   });
};

onload = () => {
    document.getElementById('getmessages').onclick = getMessages;
    document.getElementById('sendmessage').onclick = sendMessage;
};

//Mangler error handling



