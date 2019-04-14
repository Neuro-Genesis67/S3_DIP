const unit = require("./unit.js");
const should = require('should');

describe('unit test', function () {
    it('sum test', function () {
        unit.sum(7).should.be.equal(28);
    });
});

