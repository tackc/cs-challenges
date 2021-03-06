var expect = require('chai').expect;

var quicksort = require('../quicksort');

// var randUnique = [99, 11, -22, 44, 90, -2, 5, -81, 13, 23, -31, 69, 13];
var randUnique = [99, 11, 69, 13];
// var randDuplicates = [12, 3, -4, 12, 5, 90, -98, -1, -4, 28, 111, 70, 405];
var randDuplicates = [12, -4, 12, -1, -4];

var sortedUnique = randUnique.slice();
var sortedDuplicates = randDuplicates.slice();

sortedUnique.sort(function(a, b) {
  return a - b;
});

sortedDuplicates.sort(function(a, b) {
  return a - b;
});

describe('Quicksort', function(done) {
  it('should return empty array when passed an empty array', function() {
    let testArr = [];
    quicksort(testArr);
    expect(testArr).to.eql([]);
  });
  it('should work with all unique values', function() {
    let testArr = randUnique;
    quicksort(testArr);
    expect(testArr).to.eql(sortedUnique);
  });
  it('should work with some duplicated values', function() {
    let testArr = randDuplicates;
    quicksort(testArr);
    expect(testArr).to.eql(sortedDuplicates);
  });
});
