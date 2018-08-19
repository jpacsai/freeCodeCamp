/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWord(str) {
    var arr = str.split(" ");
    var longest = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > longest) {
        longest = arr[i].length;
      }
    }
    return longest;
}