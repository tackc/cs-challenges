var expect = require('chai').expect;

var mergeSort = require('../mergesort');

var randUnique = [99, 11, -22, 44, 90, -2, 5, -81, 13, 23, -31, 69, 13];
var randDuplicates = [12, 3, -4, 12, 5, 90, -98, -1, -4, 28, 111, 70, 405];

var sortedUnique = randUnique.slice();
var sortedDuplicates = randDuplicates.slice();

sortedUnique.sort(function(a, b) {
  return a - b;
});

sortedDuplicates.sort(function(a, b) {
  return a - b;
});

describe('MergeSort', function(done) {
  it('should return empty array when passed an empty array', function() {
    expect(mergeSort([])).to.eql([]);
  });
  it('should work with all unique values', function() {
    expect(mergeSort(randUnique)).to.eql(sortedUnique);
  });
  it('should work with some duplicated values', function() {
    expect(mergeSort(randDuplicates)).to.eql(sortedDuplicates);
  });
});
