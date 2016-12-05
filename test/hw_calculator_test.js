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
  random: function(){
    return Math.floor(Math.random());
  }
};

/* Write Mocha/Chai Tests here */
/* Starter Code */
describe('Calculator functions work', function(){
  //add
  it('calculator.add works correctly',function(){
    expect(calculator.add(1,2)).to.equal(3);
  });
  //subtract
  it('calculator .subtract subtracts b from a', function(){
    var final = calculator.subtract(2,3);

    expect(final).to.equal(-1);
  });
  //multiply
  it('calculator .multiply returns product of 2 num', function(){
    var final = calculator.multiply(2,3);

    expect(final).to.equal(6);
  });

  //divide
  it('calculor .divide returns a divided by b', function(){
    var final = calculator.divide(6,2);

    expect(final).to.equal(3);
  });

  //squared
  it('calculator .squared returns num squared', function(){
    var final = calculator.squared(3);

    expect(final).to.equal(9);
  });

  //power
  it('calculator .pow returns a to the power of b', function(){
    var final = calculator.power(2,3);

    expect(final).to.equal(8);
  });

  //squareRoot
  it('calculator .squareRoot returns square root of num', function(){
    var final = calculator.squareRoot(9);

    expect(final).to.equal(3);
  })
  //roundUp
  it('calculator .roundUp rounds float up to nearest integer', function(){
    var final = calculator.roundUp(1.4);

    expect(final).to.equal(2);
  });

  //roundDown
  it('calculator .roundDown rounds fload down to nearest integer', function(){
    var final = calculator.roundDown(1.9);

    expect(final).to.equal(1);
  });
});
