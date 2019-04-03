const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const employee = new Schema({
    title: String,
    name: String,
    employmentDate : Date,
    wage: Number,
    company: {type: Schema.Types.ObjectId, ref: 'Company'} // 0..1 link to Company
});

employee.methods.toString = function() {
    return this.title + ", wage: " + this.wage;
};

module.exports = mongoose.model('Employee', employee);
