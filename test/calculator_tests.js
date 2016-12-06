var expect = require('chai').expect;
var calculator = {
  /* Basic arithmatic functions */
  add: function(a,b){ return a + b; },
  subtract: function(a,b){ return a - b; },
  multiply: function(a,b){ return a * a; },
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
  random: function(){
  }
};

/* Write Mocha/Chai Tests here */
/* Starter Code */
describe('Calculator functions work', function(){

  it('calculator.add works correctly',function(){
    expect(calculator.add(1,2)).to.equal(3);
  });
  it('calculator.subtract works correctly', function(){
    expect(calculator.subtract(2,1)).to.equal(1);
  });
  it('calculator.multiply works this time', function(){
    expect(calculator.multiply(2,4)).to.equal(8);
  });
  it('caclculator.divide works again', function(){
    expect(calculator.divide(6,3)).to.equal(2);
  });
  it('working squared', function(){
    expect(calculator.squared(3,3)).to.equal(18);
  })
  it('powered working', function(){
    expect(calculator.power(4,3)).to.equal(64);
  })
  it('squareRoot working' function(){
    expect(calculator.squareRoot(100)).to.equal(10);
  })
  it('roundUp working', function(){
    expect(calculator.roundUp(5.8)).to.equal(6);
  })
  it('roundDown working', function(){
    expect(calculator.roundDown(7.3)).to.equal(7);
  })
});
