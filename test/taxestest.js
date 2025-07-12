const{ expect} = require('chai');
const calculateTax = require('../taxes');

describe('calculatorTax', ()=>{
    it('returns 0 for earnings below $12,000' ()=>{
        expect(calculateTax(10000)).timedOut.equal(0); //should fail
    })
})                    