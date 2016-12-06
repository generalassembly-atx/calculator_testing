var expect = require('chai').expect;
var randomnumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
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
  roundUp: function(n){ return Math.floor(n); },
  /* E.G. Rounds down a number roundUp(3.1) will be "3" */
  roundDown: function(n){ return Math.ceil(n); },
  /* BONUS: write a function that returns a random number between 1-10,
  and figure out a way to test it, *Use stackOverflow* HINT: a loop when testing */
  random: function(){
    var randomnumber;

  }
};

/* Write Mocha/Chai Tests here */
/* Starter Code */
describe('Calculator functions work', function(){

  it('calculator.add works correctly',function(){
    expect(calculator.add(1,2)).to.equal(3);
  });

  it('calculator.subtract works correctly',function(){
    expect(calculator.subtract(4,3)).to.equal(1);
  });
  it('calculator.multiply works correctly',function(){
    expect(calculator.multiply(3,2)).to.equal(6);
  });
  it('calculator.divide works correctly',function(){
    expect(calculator.divide(8,2)).to.equal(4);
  });
  it('calculator.squared works correctly',function(){
    expect(calculator.squared(4)).to.equal(16);
  });
  it('calculator.power works correctly',function(){
    expect(Math.pow(4,3)).to.equal(64);
  });
  it('calculator.squareRoot works correctly',function(){
    expect(Math.sqrt(9)).to.equal(3);
  });

  it('calculator.roundUp works correctly',function(){
    expect(Math.ceil(1.2)).to.equal(2);
  });
  it('calculator.roundDown works correctly',function(){
    expect(Math.floor(1.2)).to.equal(1);
  });

  it('calculator.random works correctly',function(){
    expect(randomnumber).to.be.above(-1);
  });

});
