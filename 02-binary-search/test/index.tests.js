var expect = require('chai').expect;

var binarySearch = require('../binarysearch');

describe('binarySearch', function(done) {
  it('should return -1 for an empty array', function() {
    expect(binarySearch([], 5)).to.equal(-1);
  });
  it('should return -1 when the value is not found', function() {
    expect(binarySearch([1, 3, 5], 2)).to.equal(-1);
  });
  it('should return correct index when value is found', function() {
    expect(binarySearch([2, 4, 6, 8], 4)).to.equal(1);
  });
  it('should work with negative numbers', function() {
    expect(binarySearch([-5, -3, 1, 4], -3)).to.equal(1);
  });
  it('should work odd array lengths', function() {
    expect(binarySearch([-5, -3, 1, 4, 5], 4)).to.equal(3);
  });
});
