var express = require('express');
var path = require('path');
var hbs = require('express-handlebars');

var indexRouter = require('./routes');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutDir: __dirname + '/views/layouts/'}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//filerne
app.use(express.static('public/filer'));

module.exports = app;
