
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let mid = Math.ceil(arr.length / 2)
  let leftArr = arr.slice(0, mid)
  let rightArr = arr.slice(mid, arr.length)
  var sortedLeftArr = mergeSort(leftArr)
  var sortedRightArr = mergeSort(rightArr)
  return merge(sortedLeftArr, sortedRightArr)

  function merge(leftArr, rightArr) {
    var smallest;
    if (leftArr.length === 0 ) {
      return rightArr
    }
    if (rightArr.length === 0) {
      return leftArr
    }
    if (leftArr[0] > rightArr[0]) {
      smallest = rightArr.shift()
    } else {
      smallest = leftArr.shift()
    }
    var merged = merge(leftArr, rightArr)
    merged.unshift(smallest)
    return merged
  }
}

module.exports = mergeSort;
