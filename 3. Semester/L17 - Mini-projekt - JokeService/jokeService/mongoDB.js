const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');
const app = express();
let port = process.env.PORT || 3000;
let uri = 'mongodb+srv://sa:Hdr76nqntom@cluster0-ztjl9.mongodb.net/test?retryWrites=true';
mongoose.Promise = Promise;
mongoose.connect(uri, {useNewUrlParser: true});



// const ObjectId = Schema.Types.ObjectId; Kun hvis man vil have flere tabeller






// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// // const ObjectId = Schema.Types.ObjectId; Bruges kun hvis man vil have flere tabeller
//
// mongoose.Promise = Promise;
// // mongoose.connect('mongodb://localhost/companyDB', {useNewUrlParser: true});
// mongoose.connect('mongodb+srv://sa:<Hdr76nqntom>@cluster0-ztjl9.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}); //Skal måske ikke have <>
//
// const company = new Schema({
//     name: String,
//     hours: Number,
//     employees: [{type: ObjectId, ref: 'Employee'}] // 0..* link to Employee
// });
// const Company = mongoose.model('TomsTabel', company);
//
// const employee = new Schema({
//     title: String,
//     name: String,
//     employmentDate: Date,
//     wage: Number,
//     company: {type: ObjectId, ref: 'Company'} // 0..1 link to Company
// });
// const Employee = mongoose.model('Employee', employee);