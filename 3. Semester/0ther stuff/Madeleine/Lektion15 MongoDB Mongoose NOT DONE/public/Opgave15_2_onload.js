let button = document.getElementById('submit_button');
button.onclick = sendFuction;

function sendFuction() {
    let message = document.getElementById('message_field').value;
    let name = document.getElementById('nameinput').value;

    let obj = {message: message, name: name};
    console.log(obj);
    console.log(JSON.stringify(obj));
    fetch('/messages', {method:"POST",  headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(obj)});

}