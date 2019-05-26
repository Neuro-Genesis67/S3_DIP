let jokesList = [];
let sitesList = [];
let port = process.env.PORT || 3000;

const Express = require('express');
const exHbs = require('express-handlebars');
const fetch = require('node-fetch');
const app = Express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

app.listen(port, () => {console.log(`Listening on port ${port}`)});
app.set('view engine', 'handlebars');
app.engine('handlebars', exHbs({defaultLayout: 'main'}));
app.use(Express.static('public'));

mongoose.Promise = Promise;
mongoose.connect('mongodb+srv://sa:Hdr76nqntom@cluster0-ztjl9.mongodb.net/jokeService?retryWrites=true', {useNewUrlParser: true});

const joke = new Schema({
    setup: String,
    punchline: String
});
const Joke = mongoose.model('Joke', joke);
getJokes();
getSites();

// Sites:
app.get('/', (req, res) => {
    res.render('body', {
        jokes: jokesList,
        sites: sitesList
    });
});

app.get('/api/jokes', (req, res) => {
    Joke.find().exec().then(jokes => {
        res.send(jokes)
            .catch(error => console.log("Error: " + error));
    });
});

app.get('/api/othersites', (req, res) => {
    fetch('https://krdo-joke-registry.herokuapp.com/api/services')
        .then(reply => {
            if (reply.status >= 400) {
                throw new Error(reply.status());
            } else {
                return reply.json();
            }
            })
        .then(jason => {
            res.send(jason);
        } )
        .catch(error => console.log('error: ' + error));
});

app.get('/api/otherjokes/:site', (req, res) => { // Vi går ud fra at :site er "_id" på den ønskede side
    fetch('https://krdo-joke-registry.herokuapp.com/api/services')
        .then(reply => {
            if (reply.status >= 400) {
                throw new Error(reply.status());
            } else {
                return reply.json();
            }
        })
        .then(jason => {
            jason.forEach(part => {
                if (part._id === req.params.site) {
                    let selectedSite = part.address + 'api/jokes';
                    fetch(selectedSite)
                        .then(reply => reply.json())
                        .then(jason => {
                            res.send(jason);
                        })
                        .catch(error => console.log('error: ' + error));
                }
            })
        }).catch(error => console.log('error: ' + error));
});


// Methods:
function getJokes(){
    Joke.find().exec()
        .then(jokes => {
            jokes.forEach(joke => {
                let myJoke = {
                    "setup": joke.setup,
                    "punchline": joke.punchline
                };
                jokesList.push(myJoke)})})
};

function getSites() {
    fetch('https://krdo-joke-registry.herokuapp.com/api/services')
        .then(reply => reply.json())
        .then(jason => {
            jason.forEach(part => {
                let site = part;
                sitesList.push(part)
            })
        })
}

function createJoke(setup, punchline) {
    const joke = new Joke({
        setup: setup,
        punchline: punchline
    });
    return joke.save();
};

function removeJoke(setup, punchline) {
    Joke.deleteOne({
        setup: setup,
        punchline: punchline
    }).exec();
}



























