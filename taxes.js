// function calculateTax(earnings){
//      if (earnings > 12000) return 4000;
//     return 0;
// }
//refactoring 
// 
//trying the for loop
const TAX_BRACKETS = [
  { min: 0, max: 12000, rate: 0 },
  { min: 12000, max: 36000, rate: 0.2 },
  { min: 36000, max: Infinity, rate: 0.4 }
];

function calculateTax(earnings) {
  let tax = 0;
  
  for (const bracket of TAX_BRACKETS) {
    if (earnings > bracket.min) {
      const taxableAmount = Math.min(earnings, bracket.max) - bracket.min;
      tax += taxableAmount * bracket.rate;
    }
  }
  
  return tax;
}
module.exports = calculateTax;