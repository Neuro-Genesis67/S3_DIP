const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/companyDB', {useNewUrlParser: true});

const company = new Schema({
    name: String,
    hours: Number,
    employees: [{type: ObjectId, ref: 'Employee'}] // 0..* link to Employee
});
const Company = mongoose.model('Company', company);

const employee = new Schema({
    title: String,
    name: String,
    employmentDate: Date,
    wage: Number,
    company: {type: ObjectId, ref: 'Company'} // 0..1 link to Company
});
const Employee = mongoose.model('Employee', employee);

// Returns a promise that resolves when the company is created
function createCompany(name, hours) {
    const company = new Company({
        name: name,
        hours: hours
    });
    return company.save();
}

// Returns a promise that resolves when a company is found with the specified id
function getCompany(companyId) {
    return Company.findOne({_id: companyId}).exec();
}

// Returns a promise that resolves with an array of all companies
function getCompanies() {
    // return Company.find().exec();
    return Company.find().populate('employees').exec();
}

// Returns a promise that resolves when the employee is created
function createEmployee(title, name, employmentDate, wage) {
    const employee = new Employee({
        title: title,
        name: name,
        employmentDate: employmentDate,
        wage: wage
    });
    return employee.save();
}

// Returns a promise that resolves with an array of all employees
function getEmployees() {
    return Employee.find().exec();
    // return Employee.find().populate('company').exec();
}

// Returns a promise that resolves when an employee is found with the specified id
function getEmployee(employeeId) {
    return Employee.findOne({_id: employeeId}).exec();
}

// Returns a promise that resolves when the employee and the company are connected (bidirectional)
function connectEmployeeToCompany(employee, company) {
    employee.company = company;
    company.employees.push(employee);
    return Promise.all([company.save(), employee.save()]);
}

// createCompany('Coop', 37).then(resultat =>
//     console.log(`createCompany: %o`, resultat)
// );

// createCompany('Eaaa', 37).then(resultat =>
//     console.log(`createCompany: %o`, resultat)
// );

// getCompanies().then(resultat =>
//     console.log(`getCompanies: %o`, resultat)
// );

// createEmployee('chef','Tarzan', Date.now(), 45678).then(resultat =>
//     console.log(`createEmployee: %o`, resultat)
// );

// createEmployee('salgsassistent','Ida', Date.now(), 22000).then(resultat =>
//     console.log(`createEmployee: %o`, resultat)
// );

// createEmployee('bager','Viggo', Date.now(), 24000).then(resultat =>
//     console.log(`createEmployee: %o`, resultat)
// );

// getEmployees().then(resultat =>
//     console.log(`getEmployees: %o`, resultat)
// );

async function addEmployeeToCompany(employeeName, companyName) {
    let employee = await Employee.findOne({name: employeeName}).exec();
    let company = await Company.findOne({name: companyName}).exec();
    await connectEmployeeToCompany(employee, company);
    console.log('addEmployeeToCompany: %s <-> %s', employeeName, companyName);
};
// addEmployeeToCompany('Viggo', 'Coop');
// addEmployeeToCompany('Ida', 'Coop');
// addEmployeeToCompany('Tarzan', 'Coop');
