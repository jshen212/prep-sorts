var test = [21,6,1,5];

function swap(array, firstI, secondI) {
  var temp = array[firstI];
  array[firstI] = array[secondI];
  array[secondI] = temp;
}

function bubbleSort2(array) {
  var temp;
  var arrayLength = array.length || 0;

  for(var i = 0; i < arrayLength; i++) {
      for(var j = 0; j < arrayLength; j++) {
        if(array[j] > array[j+1]) {
          swap(array, j, j+1);
        }
      }
  }

  return array;
}

console.log(bubbleSort2(test));
