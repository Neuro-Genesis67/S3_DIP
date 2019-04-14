const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');

mongoose.Promise = Promise;
//mongodb+srv://Karl:djuked13@mitcluster-vvpcn.mongodb.net/test?retryWrites=true
let uri = 'mongodb+srv://Karl:djuked13@mitcluster-vvpcn.mongodb.net/test?retryWrites=true';
let port = 8080;
const fetch = require("node-fetch");

mongoose.connect(uri, { useNewUrlParser: true });

const express = require('express');
const app = express();

const JokeSchema = new Schema({
    setup: String,
    punchline: String
});
const Joke = mongoose.model('Jokes', JokeSchema);

app.use(express.json());
app.use(express.static('/filer'));

function getJokes() {
    return Joke.find().exec();
}
app.get('/api/jokes', (request, response) => {
   getJokes()
       .then(jokes => response.send(jokes))
       .catch(fejl => console.log('Fejl: ' + fejl));
});

app.listen(port);