var test = [21,6,1,5,2,8,32,21,84,42];

function merge(left, right) {
  var result = [];

  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while(left.length) {
    result.push(left.shift());
  }

  while(right.length) {
    result.push(right.shift());
  }
  return result;
}

function mergeSort(array) {
  var left;
  var right;
  var midIdx;

  if(array.length < 2) {
    return array;
  }

  midIdx = parseInt(array.length / 2);
  left = array.slice(0, midIdx);
  right = array.slice(midIdx, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(test));
