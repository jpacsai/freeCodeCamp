/*
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each 
member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

*/

function largestOfFour(arr) {
    var largests = [];
    for (var i = 0; i < arr.length; i++) {
      var max = 0;
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > max) {
          max = arr[i][j];
        }
      }
      largests.push(max);
    }
    return largests;
}