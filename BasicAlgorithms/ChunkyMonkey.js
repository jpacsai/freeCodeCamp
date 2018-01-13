/*
Write a function that splits an array (first argument) into groups the length of size 
(second argument) and returns them as a two-dimensional array.

chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

*/

function chunkArrayInGroups(arr, size) {
    var counter = Math.ceil(arr.length / size);
    var newArr = [];
    var x = 0;
    
    for (var i = 0; i < counter; i++) {
      newArr.push([]);
      for (var j = 0; j < size; j++) {
        newArr[i].push(arr[x]);
        x++;
        if (x === arr.length) {
          return newArr;
        }
      }
    }
  }