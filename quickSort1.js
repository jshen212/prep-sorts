var test = [21,6,1,5,2,8,32,21,84,42];

function quickSort1(array) {
  var pivot;
  var left = [];
  var right = [];

  if(array.length < 2) {
    return array;
  }

  pivot = array.shift();

  for(var i = 0; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort1(left).concat(pivot, quickSort1(right));
}

console.log(quickSort1(test));
