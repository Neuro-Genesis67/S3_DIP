const express = require('express');
const path = require('path');
const app = express();
const messages = require('./messages');
// app.use(express.urlencoded({ extended: false })); //Parse klartekst fra html til jason
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));



                               // ROUTES //
// GET
app.get('/', (req, res) => {
    res.send('GET /')
});

app.get('/messages', (req, res) => {
    res.json(messages)
});

app.get('/messages/:id', (req, res) => {
    let msgFound = messages.some(msg => msg.id == req.params.id);
    if (msgFound) {
        res.json(messages.filter(msg => msg.id == req.params.id));
    } else {
        res.json({ Error: "Message not found"});
    }
});


// POST
app.post('/messages', (req, res) => {
    if (req.body.message) {
        newMessage = {
            message: req.body.message,
            id: messages.length + 1
        };
        messages.push(newMessage);
        res.json({ Success: "Message has been created"});
    } else {
        res.json({ Error: "Message text missing"});
    }
});


// PUT
app.put('/messages/:id', (req, res) => {
    const found = messages.some(message => message.id === parseInt(req.params.id));
    if(found){
        for(let i = 0; i < messages.length; i++) {
            if (messages[i].id == req.params.id) {
                messages[i].message = req.body.message;
            }
        }
        res.json({ Success: "Message updated"});
    } else {
        res.status(400).json({ Error: `Message couldn't be updated`});
    }
});


// DELETE
app.delete('/messages/:id', (req, res) => {
    const found = messages.some(message => message.id === parseInt(req.params.id));
    if(found){
        for(let i = 0; i < messages.length; i++) {
            if (messages[i].id == req.params.id) {
                messages.splice(i);
            }
        }
        res.json({ Success: "Message deleted"});
    } else {
        res.status(400).json({ Error: `No message found with the given id: ${req.params.id}`});
    }
});


const port = process.env.PORT || 8080;
app.listen(port, () => {console.log(`Listening to port ${port}`)});


