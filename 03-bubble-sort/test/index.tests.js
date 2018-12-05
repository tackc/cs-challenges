var expect = require('chai').expect;

var bubbleSort = require('../bubblesort');

var randUnique = [99, 11, -22, 44, 90, -2, 5, -81, 13, 23, -31];
var randDuplicates = [12, 3, -4, 12, 5, 90, -98, -1, -4, 28];

var sortedUnique = randUnique.slice();
var sortedDuplicates = randDuplicates.slice();

sortedUnique.sort(function(a, b) {
  return a - b;
});

sortedDuplicates.sort(function(a, b) {
  return a - b;
});

describe('BubbleSort', function(done) {
  it('should return empty array when passed an empty array', function() {
    expect(bubbleSort([])).to.eql([]);
  });
  it('should work with all unique values', function() {
    expect(bubbleSort(randUnique)).to.eql(sortedUnique);
  });
  it('should work with some duplicated values', function() {
    expect(bubbleSort(randDuplicates)).to.eql(sortedDuplicates);
  });
});
