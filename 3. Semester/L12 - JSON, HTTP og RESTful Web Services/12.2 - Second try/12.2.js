const Handler = {
    name : "",
    roomName : "",
    message : "",

    // Initiate loading of buttons and messages from json



    sendMsg : function() {
    let message = document.getElementById("inputTxt").value;
    Her kom du til. Det var så lidt.
        fetch("https://dip-chat-server.herokuapp.com/api/messages/", {method: "POST", body: JSON.stringify(message), headers:{
                'Content-Type': 'application/json'
            }}).then(function () {
            getMessages();
        });
    },



    loadRoom : function(room) {
        this.roomName = room;},


};



function setRoom() {

};

function getRoom() {

};

send = (room) => {
    console.log(room);



//    Name




//    Room
    let done =document.getElementById("sendBtn").innerText;



//    let message = document.getElementById("inputTxt").value;


    console.log(done);
    //Message sent = clear inputTxt
    // document.getElementById("inputTxt").value = "";
};