/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

*/

function uniteUnique(arr) {
    var flat = [];
    var keys = Object.keys(arguments);
    for (var i = 0; i < keys.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
        //console.log(arr[i].length);
        flat.push(arguments[i][j]);
      }
    }
    for (var k = 0; k < flat.length; k++) {
      var index = flat.lastIndexOf(flat[k]);
      if (index !== k ) {
        flat.splice(index,1);
        k--;
      }
    }
    return flat;
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  