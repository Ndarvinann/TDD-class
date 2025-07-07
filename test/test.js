const { expect } = require('chai');  // Add this at the top
const multiply = require('../multiply');  // Make sure this path is correct

describe('multiply', () => {
  it('returns 1 when multiplying 1 and 1', () => {
    expect(multiply(1, 1)).to.equal(1);
  });

  it('returns 4 when multiplying 2 and 2', () => {
    expect(multiply(2, 2)).to.equal(4);
  });
});
it('returns 9 when multiplying 3 and 3', () => {
  expect(multiply(3, 3)).to.equal(9);
});