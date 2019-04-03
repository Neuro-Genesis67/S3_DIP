"use strict";

// INITIALIZATION
const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('tiny'));

// MONGODB & MONGOOSE SETUP
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(config.localMongoDB + '/companyDB', {useNewUrlParser: true});

// ROUTES FOR THE APP
const companyRouter = require('./routes/company');
const employeeRouter = require('./routes/employee');
app.use('/company', companyRouter);
app.use('/employee', employeeRouter);

// START THE SERVER
const port = process.env.PORT || config.localPort;
app.listen(port);
console.log('Listening on port ' + port + ' ...');

module.exports = app;
