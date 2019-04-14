const express = require('express');
const router = express.Router();
const JokeModel = require('../models/joke.model');

router.post('/api/jokes', (req, res) => {
    //req body
    if(!req.body) {
        return res.status(400).send('Request body is missing')
    }
    let model = new JokeModel(req.body)
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }
            res.status(201).send(doc);
        })
        .catch (err => {
            res.status(500).json(err);
        })
})

router.get('/api/jokes', (req, res) => {
    if (req.query.name) {
        res.send(`You have requested a person ${req.params._id}`);
    } else {
        res.send('You have requested jokes');
    }

});

router.get('api/jokes', (req, res) => {
    if (!req.query.punchline) {
        return res.status(400).send('Missing URL parameter: punchline')
    }
    JokeModel.findOne({
        punchline: req.query.punchline
    })
        .then (doc => {
            res.json(doc)
        })
        .catch (err => {
            res.status(500).json(err);
        })
})

router.put('api/jokes', (req, res) => {
    if (!req.query.punchline) {
        return res.status(400).send('Missing URL parameter: punchline')
    }
    JokeModel.findOneAndUpdate({
        punchline: req.query.punchline
    }, req.body, {
        new: true
    })
        .then (doc => {
            res.json(doc)
        })
        .catch (err => {
            res.status(500).json(err);
        })
}

router.delete('/api/jokes', (req, res) => {
    if(!req.query.punchline) {
        return res.status(400).send('Missing URL parameter: punchline')
    }

    JokeModel.findOneAndRemove({
        punchline: req.query.punchline
    })
        .then (doc => {
            res.json(doc)
        })
        .catch (err => {
            res.status(500).json(err);
        })
})

module.exports = router;