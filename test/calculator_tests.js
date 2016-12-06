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
  random: function(){ return Math.floor(Math.random() * 10 + 1); }

};

/* Write Mocha/Chai Tests here */
/* Starter Code */
describe('Calculator functions work', function(){

  it('calculator.add works correctly',function(){
    expect(calculator.add(1,2)).to.equal(3);
  });

  it('calculator.subtract works correctly',function(){
    expect(calculator.subtract(6,9)).to.equal(-3);
  });

  it('calculator.multiply works correctly',function(){
    expect(calculator.multiply(2,3)).to.equal(6);
  });

  it('calculator.divide works correctly',function(){
    expect(calculator.divide(10,5)).to.equal(2);
  });

  it('calculator.squared works correctly',function(){
    expect(calculator.squared(2)).to.equal(4);
  });

  it('calculator.power works correctly',function(){
    expect(calculator.power(2,4)).to.equal(16);
  });

  it('calculator.squareRoot works correctly',function(){
    expect(calculator.squareRoot(9)).to.equal(3);
  });

  it('calculator.roundUp works correctly',function(){
    expect(calculator.roundUp(1.1)).to.equal(2);
  });

  it('calculator.roundDown works correctly',function(){
    expect(calculator.roundDown(1.1)).to.equal(1);
  });

  it('calculator.random works correctly',function(){
		expect(calculator.random()).to.be.above(0).to.be.below(10);
  });

});
