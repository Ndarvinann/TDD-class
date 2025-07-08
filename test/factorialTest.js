const{expect} = require('chai');
const factorial = require('../factorial');

describe('factorial', ()=>{
    it('returns 1 for input 1', ()=>{
        expect(factorial(1)).to.equal(1);
    });
    it('returns 2 for the input of 2', ()=>{
        expect(factorial(2)).to.equal(2)
    });
    it('returns 6 for the input 3', ()=>{
        expect(factorial(3)). to. equal(6);
    });
    it('returns 120 for input 5', ()=>{
        expect(factorial(5)).to.equal(120);
    });
});