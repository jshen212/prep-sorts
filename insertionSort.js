var test = [21,6,1,5,2,8,32,21,84,42];

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var current = array[i];
    for(var j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j+1] = array[j];
      array[j] = current;
    }
  }
  return array;
}

console.log(insertionSort(test));
