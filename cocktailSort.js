var test = [21,6,1,5,2,8,32,21,84,42];

function swap(array, firstIdx, secondIdx){
    var temp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = temp;
}

function cocktailSort(array) {
  var i, left = 0, right = array.length - 1, temp;

    while (left < right) {
        for (i = left; i < right; i++)
            if (array[i] > array[i + 1]) {
                swap(array, i, i+1);
            }

        right--;
        for (i = right; i > left; i--)
            if (array[i - 1] > array[i]) {
                swap(array, i-1, i);
            }

        left++;
    }
    return array;
}

console.log(cocktailSort(test));
