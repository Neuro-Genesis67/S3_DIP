//app1.set('view engine', 'jade');

const express = require('express');
const mongoose = require('mongoose');

let uri = 'mongodb+srv://Karl:djuked13@mitcluster-vvpcn.mongodb.net/test?retryWrites=true';
let port = 8080;

const app1 = express();
mongoose.Promise = Promise;

app1.use(express.json());
app1.use(express.static('/filer'));

mongoose.connect(uri, { useNewUrlParser: true });

const jokeSchema = new mongoose.Schema({
    _id : String,
    setup: String,
    punchline: String
});

const joke = mongoose.model('Jokes', jokeSchema);

app1.get('/api/jokes', (request, response) => {
    joke.find({}, function(err, docs) {
        if(err) response.json(err);
        else response.send(jokes);
    });
});


