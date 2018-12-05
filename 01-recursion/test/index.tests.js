var expect = require('chai').expect;

var factorial = require('../factorial');
var fibonacci = require('../fibonacci');

describe('Factorial', function(done) {
  it('should return 1 for any negative value', function() {
    expect(factorial(-8)).to.equal(1);
  });
  it('should return 1 when 0 is the argument', function() {
    expect(factorial(0)).to.equal(1);
  });
  it('should return 1 when 1 is the argument', function() {
    expect(factorial(1)).to.equal(1);
  });
  it('should return 6 when 3 is the argument', function() {
    expect(factorial(3)).to.equal(6);
  });
  it('should return 120 when 5 is the argument', function() {
    expect(factorial(5)).to.equal(120);
  });
});

describe('Fibonacci', function(done) {
  it('should return 0 for any negative argument', function() {
    expect(fibonacci(-8)).to.equal(0);
  });
  it('should return 0 for an argument of 0', function() {
    expect(fibonacci(0)).to.equal(0);
  });
  it('should return 1 for an argument of 1', function() {
    expect(fibonacci(1)).to.equal(1);
  });
  it('should return 1 for an argument of 2', function() {
    expect(fibonacci(2)).to.equal(1);
  });
  it('should return 5 for an argument of 5', function() {
    expect(fibonacci(5)).to.equal(5);
  });
  it('should return 144 for an argument of 12', function() {
    expect(fibonacci(12)).to.equal(144);
  });
});
