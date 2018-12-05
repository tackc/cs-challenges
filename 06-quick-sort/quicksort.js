function quicksort(arr, left=0, right=null) {
  if (right === null) {
    right = arr.length-1
  }
  if (left < right) {
    var pivot = partition(arr, left, right)
    quicksort(arr, left, pivot)
    quicksort(arr, pivot+1, right)
  }
  function partition(arr, left, right) {
    var pivotVal = arr[left]
    var i = left - 1
    var j = right + 1
    while (true) {
      do {
        i++;
      } while (arr[i] < pivotVal)
      do {
        j--;
      } while (arr[j] > pivotVal)
      if (i >= j) {
        return j
      }
      var temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
}

module.exports = quicksort;
