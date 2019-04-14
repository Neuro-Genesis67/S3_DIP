const app = require('../app.js');
const controller = require("../controllers/controller");
const request = require('supertest');
const should = require('should');

describe('integration test - async', function () {
    it("get('/') test", async function () {
        await request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /html/);
    });

    it("get('/employee') test", async function () {
        const response = await request(app)
            .get('/employee')
            .expect(200)
            .expect('Content-Type', /json/);
        const employees = response.body;
        employees.length.should.be.greaterThanOrEqual(2);
        employees[0].name.should.be.equal('Viggo');
        employees[1].name.should.be.equal('Ida');
    });

    it("get('/company') test", async function () {
        const response = await request(app)
            .get('/company')
            .expect(200)
            .expect('Content-Type', /json/);
        const companies = response.body;
        companies.length.should.be.greaterThanOrEqual(1);
        companies[0].name.should.be.equal('Coop');
    });

    it("post('/company') test", async function () {
        const response = await request(app)
            .post('/company')
            .send({
                'hours': 40,
                'name': 'EAAA'
            })
            .expect(200);
        response.body.message.should.be.equal('Company saved!');

        const response2 = await request(app)
            .get('/company');
        const companies = response2.body;
        const last = companies.length - 1;
        companies[last].name.should.be.equal('EAAA');
        companies[last].hours.should.be.equal(40);
    });
});
