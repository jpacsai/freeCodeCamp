/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

*/

function pairwise(arr, arg) {
    if (arr.length === 0) {
      return 0;
    }
    var array = arr.slice(0);
    var pairs = [];
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (i !== j && array[i] + array[j] === arg) {
          pairs.push([array[i], array[j]]);
          var x = array[j];
          array.splice(i,1);
          array.splice(array.indexOf(x),1);
        }
      }
    }
    var newArr = arr.slice(0);
    for (var k = 0; k < pairs.length; k++) {
      var a = newArr.indexOf(pairs[k][0]);
      newArr[a] = "x";
      var b = newArr.indexOf(pairs[k][1]);
      newArr[b] = "x";
      pairs[k] = a + b;
    }
    var result = pairs.reduce(function(total,n) {
      return total+n;
    });
    return result;
}