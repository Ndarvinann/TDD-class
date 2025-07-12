const { expect } = require('chai');
const calculateTax = require('../taxes'); 

describe('calculateTax', () => {  
  it('returns 0 for earnings below £12,000', () => {  
    expect(calculateTax(10000)).to.equal(0);  
  });

  it('returns 20% tax for earnings between £12k-£36k', () => {
    expect(calculateTax(20000)).to.equal(1600); 
  });

  it('returns 40% tax for earnings above £36k', () => {
    expect(calculateTax(50000)).to.equal(13200);
  });
});