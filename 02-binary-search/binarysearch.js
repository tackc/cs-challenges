function binarySearch(arr, searchValue, min=0, max=null) {
  var currentElement;
  if (max === null) {
    max = arr.length - 1
  }

  while (min <= max) {
    var middle = (min + max) / 2 | 0;
    currentElement = arr[middle];
    if (currentElement === searchValue) {
      return middle;
    }
    if (currentElement < searchValue) {
      return binarySearch(arr, searchValue, middle + 1, max);
    }
    if (currentElement > searchValue) {
      return binarySearch(arr, searchValue, min, middle - 1);
    }
  }
  return -1;
};

module.exports = binarySearch;