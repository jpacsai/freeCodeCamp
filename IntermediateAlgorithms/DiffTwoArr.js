/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

*/

function diffArray(arr1, arr2) {
    var newArr = [];
    var arr = arr1.concat(arr2);
    var counter;
    for (var i = 0; i < arr.length; i++) {
      counter = 0;
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          counter++;
        }
      }
      if (counter === 1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);