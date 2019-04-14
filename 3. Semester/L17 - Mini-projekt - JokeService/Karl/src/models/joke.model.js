const mongoose = require('mongoose');

const uri = 'mongodb+srv://sa:Hdr76nqntom@cluster0-ztjl9.mongodb.net/test?retryWrites=true';

mongoose.connect(uri, { useNewUrlParser: true });

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
});

module.exports = mongoose.model('Jokes', JokeSchema);