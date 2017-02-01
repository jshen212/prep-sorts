var test = [21,6,1,5,2,8,32,21,84,42];

function bubbleSort(array) {
  var temp;
  var swap;
  do {
    swap = false;
    for(var i = 0; i < array.length; i++) {
      if(array[i] > array[i+1]) {
          temp = array[i];
          array[i] = array[i+1];
          array[i+1] = temp;
          swap = true;
      }
    }

  } while(swap);
  return array;
}

console.log(bubbleSort(test));
