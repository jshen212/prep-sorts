var test = [21,6,1,5,2,8,32,21,84,42];

function swap(array, firstIdx, secondIdx) {
  var temp = array[firstIdx];
  array[firstIdx] = array[secondIdx];
  array[secondIdx] = temp;
}

function idxOfMinVal(array, startIdx) {
  var minIdx = startIdx;
  var minVal = array[startIdx];

  for(var i = minIdx+1; i < array.length; i++) {
    if(array[i] < minVal) {
      minIdx = i;
      minVal = array[i];
    }
  }
  return minIdx;
}

function selectionSort(array) {
  var minIdx = 0;
  var minVal = array[0];

  for(var i = 0; i < array.length; i++) {
    swap(array, i, idxOfMinVal(array, i));
  }
  return array;
}

console.log(selectionSort(test));
