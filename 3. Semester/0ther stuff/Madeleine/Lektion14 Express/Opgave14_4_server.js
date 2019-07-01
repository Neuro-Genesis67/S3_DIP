const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

let messages = [];
let counter = 1;

setupdata();

function log(request, responce, next) {
    console.log(request.method + ': ' + request.url);
    next();
}



app.use('/static', express.static('public'));
//Alt det ligger i public kan adgaaes gennem at skrive static/filnavn


function setupdata() {
    addMessage("Besked1");
    addMessage("Besked2");
    addMessage("Besked3");
    addMessage("Besked4");
    addMessage("Besked5");
    addMessage("Besked6");
    addMessage("Besked7");
    addMessage("Besked8");
    addMessage("Besked9");

}

function addMessage(text) {
    if (text.length > 0) {
        let obj = {message : text, id : counter};
        messages.push(obj);
        counter ++;
        return obj;
    }
    else {
        return false;
    }
}


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/Opgave15_1_index.html'));
});


app.get('/messages', (req, res) => {
    let jsonarray = JSON.stringify(messages);
    res.send("jeg er i GET /message path :) \n" + jsonarray);
});

app.get('/message/:id', (req, res) => {
    //console.log(req);
    let message = messages.find(function (m) {
        //Kan laves global function
        if (m.id == req.params.id) {
            console.log("Found item");
            return true;
        }
    });
    try {
        res.send("jeg er i /message/:id path :)   " + JSON.stringify(message));
    }
    catch (e) {
        res.send("jeg er i /message/:id path :)  med Error: "+ e.valueOf());
    }

});

app.post('/messages', (req, res) => {

    let obj = addMessage(req.body.message);
    console.log(obj);
    if (obj) {
        res.send(obj);
    }
    else {
        res.send("Failed");
    }
});

app.delete('/message/:id', (req, res) => {
    console.log("Delete area accessed");
    messages = messages.filter(function (m) {
        if (m.id != req.params.id) {
            console.log("Item found");
            return true;
            //Check if items acutally get deleted
        }
    })
});

app.put('/message/:id', (req, res) => {
    let message = messages.find(function (m) {
        //Kan laves global function
        if (m.id == req.params.id) {
            console.log("Found item");
            return true;
        }
    });

    if (req.body.message.length > 0) {
        message.message = req.body.message;
    }

});

app.listen(8080);

