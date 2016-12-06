var expect = require('chai').expect;
var calculator = {
  /* Basic arithmatic functions */
  add: function(a,b){ return a + b; },
  subtract: function(a,b){ return a - b; },
  multiply: function(a,b){ return a * b; },
  divide: function(a,b){ return a / b; },
  squared: function(n){ return n * n; },
  /* Look up the Math object on W3 schools or Mozilla */
  /* E.G. power(2,3) is two to the third power */
  power: function(n,p){ return Math.pow(n,p); },
  /* E.G. squareRoot(9) is 3 */
  squareRoot: function(n){ return Math.sqrt(n); },
  /* E.G. Rounds up a number roundUp(3.1) will be "4" */
  roundUp: function(n){ return Math.ceil(n); },
  /* E.G. Rounds down a number roundUp(3.1) will be "3" */
  roundDown: function(n){ return Math.floor(n); },
  /* BONUS: write a function that returns a random number between 1-10,
  and figure out a way to test it, *Use stackOverflow* HINT: a loop when testing */
  random: function(){ return (Math.random()*10); }
};

/* Write Mocha/Chai Tests here */
/* Starter Code */
describe('Calculator functions work', function(){

  it('should add a and b',function(){
    expect(calculator.add(1,2)).to.equal(3);
  });

  it('should subtract b from a', function() {
    expect(calculator.subtract(5,3)).to.equal(2);
  });

  it('should multiply a by b', function() {
    expect(calculator.multiply(2,4)).to.equal(8);
  });

  it('should divide a by b', function() {
    expect(calculator.divide(6,3)).to.equal(2);
  });

  it('should square the value', function() {
    expect(calculator.squared(3)).to.equal(9);
  });

  it('should take the n value and make it a power of p', function() {
    expect(calculator.power(2,4)).to.equal(16);
  });

  it('should take the square root of n', function() {
    expect(calculator.squareRoot(16)).to.equal(4);
  });

  it('should round up the value of n', function() {
    expect(calculator.roundUp(2.2)).to.equal(3);
  });

  it('should round down the value of n', function() {
    expect(calculator.roundDown(6.7)).to.equal(6);
  });

  // it('should generate a random number between 1 and 10', function() {
  //
  // })

});
