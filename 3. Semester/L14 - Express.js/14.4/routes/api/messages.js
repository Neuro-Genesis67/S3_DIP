const express = require('express');
const router = express.Router();
const messages = require('../../Messages');

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Gets all messages
router.get('/', (req, res) => res.json(messages));

// Get single messages
router.get('/:id', (req, res) => {
    const found = messages.some(message => message.id === parseInt(req.params.id));

    if(found){
        res.json(messages.filter(message => message.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No message with the id: ${req.params.id}`});
    }
});

// Creates a new message
app.post('/', (req, res) => {
    console.log("A post has been made");
    const newMessage = {
        id: messages.length+1,
        msg: req.body.msg
    };
    if (!newMessage.id || !newMessage.msg){
        return res.status(400).json({msg: 'Please write a message'});
    }
    messages.push(newMessage);
    console.log(messages);
    res.json(messages);
});

// Deletes a message by id
app.delete('/:id', (req, res) => {
    let message = messages.filter(message => message.id === parseInt(req.params.id));
   
    if (!message) {
        res.json({ msg: "can't delete message, message does not exist"});
    } else {
        messages.delete(message);
    }
});

// Updates a message by id
app.put('/:id', (req, res) => {
    let message = messages.filter(message => message.id === parseInt(req.params.id));
    if (!message) {
        res.json({ msg: "can't update message, message does not exist"});
    } else {
        message.msg = req.params.msg;
    }
});

module.exports = router;