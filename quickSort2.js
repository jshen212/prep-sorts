var test = [21,6,1,5,2,8,32,21,84,42];

function quickSort2(array) {
  var left;
  var right;
  var randomIndex;
  var pivot;
  var arrayLength = array.length || 0;

  if(arrayLength < 2) {
    return array;
  }

  left = [];
  right = [];
  randomIndex = parseInt(Math.random() * arrayLength);
  pivot = array[randomIndex];

  for(var i = 0; i < arrayLength; i++) {
    if(i === randomIndex) {
      continue;
    }
    if(array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort2(left).concat(pivot, quickSort2(right));
}

console.log(quickSort2(test));
