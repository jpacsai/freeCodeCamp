/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/

function smallestCommons(arr) {
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  var nums = [];
  var mult = 1;
  
  for (var i = min; i <= max; i++) {
    if (i !== 1) {
      nums.push(i);
    }
    mult *= i;
  }
  
  for (var k = nums.length-1 ; k >= 0; k--) {
    for (var j = nums[k]; j <= mult; j+=nums[k]) {
      if (nums.every((divide),j) === true) {
        return j;
      }
    }
  }
  
  function divide(n) {
    return j % n === 0;
  }
  
  return "error";
}


smallestCommons([1,5]);
