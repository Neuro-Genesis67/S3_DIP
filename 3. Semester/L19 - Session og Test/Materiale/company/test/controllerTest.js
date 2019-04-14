const app = require('../app.js');
const controller = require("../controllers/controller");
const should = require('should');

describe('controller test - async', function () {
    it('getEmployees() test', async function () {
        const employees = await controller.getEmployees();
        employees.length.should.be.greaterThanOrEqual(2);
        employees[0].name.should.be.equal('Viggo');
        employees[1].name.should.be.equal('Ida');
    });
});
