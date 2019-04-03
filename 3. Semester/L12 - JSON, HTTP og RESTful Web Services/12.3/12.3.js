refresh();
setInterval(refresh, 10000);

let msg;
let msgName;
let msgText;

function selectBoxChange() {
    let selectBox = document.getElementById("selectBox");
    let value = selectBox.options[selectBox.selectedIndex].value;
    Handler.setRoom(value);
}

function refresh() {
    let tbody = document.getElementById("chat");
    tbody.innerHTML = '';
    fetch('https://dip-chat-server.herokuapp.com/api/messages').then(reply => reply.json()).then(function(json) {
        json.forEach(function(part) {
            let text = part.text;
            let name = part.name;
            let room = part.roomName;

            // Create button unless it's already existing
            if (!Handler.roomArr.includes(room)) {
                Handler.roomArr.push(room);
                createOption(room);
            }

            // Update Chat
            if (room === Handler.room && text != null && name != null) {
                msg = document.createElement("tr");
                msgName = document.createElement("td");
                msgText = document.createElement("td");

                msgName.innerText = name + ":";
                msgName.style.setProperty("font-size", "25px");
                msgName.style.setProperty("width", "250px");
                msgText.innerText = text;
                msgText.style.setProperty("width", "1000px");
                msgText.style.setProperty("border"," 2px solid #000000");

                msg.appendChild(msgName);
                msg.appendChild(msgText);
                tbody.appendChild(msg);
                tbody.scrollTop = tbody.scrollHeight;
            }
        });
    });
};

function createOption(roomName) {
    let option = document.createElement("option");
    option.innerText = roomName; // btn Text
    option.value = roomName;
    option.onclick = function(){Handler.setRoom(roomName); refresh()};
    let selectBox = document.getElementById("selectBox");
    selectBox.appendChild(option);
}

const Handler = {
    name : "",
    room : "",
    message : "",
    urlSend : "https://dip-chat-server.herokuapp.com/api/messages/",
    roomArr : [],

    setRoom : function(newRoom) {
      this.room = newRoom;
        console.log("New room: " + newRoom);
        refresh();
    },

    sendMsg : function() {
    console.log("sendMsg");
    let inputTxt = document.getElementById("inputTxt").value;
    let message = {name: "Tom", roomName: this.room, text: inputTxt};
    fetch(this.urlSend, {
        method: "POST",
        body: JSON.stringify(message),
        headers:{'Content-Type': 'application/json'}
    });
    refresh();
    },
};