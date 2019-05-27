var express = require('express');
var router = express.Router();
const fs = require('fs').promises;

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir('./public/filer')
  .then(filer => {
    res.render('index', { filer: filer, title: 'Filer' });
  }) 
});

module.exports = router;
