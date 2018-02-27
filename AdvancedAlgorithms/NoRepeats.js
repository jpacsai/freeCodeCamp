/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

*/


function permAlone(str) {
    var perms = getAllPermutations(str);
    var result = [];

    // recursion
    function getAllPermutations(string) {
    var r = [];
    if (string.length === 1) {
      r.push(string);
      return r;
    }
    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];
      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      var innerPermutations = getAllPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
        r.push(firstChar + innerPermutations[j]);
      }
    }
    return r;
    }

    // if string length === 1
    if (perms.length === 1) {
      return 1;
    }
    else {
        // check for repeating letters next to each other
      for (var k = 0; k < perms.length; k++) {
        var repeat;
        for (var m = 0; m < str.length-1; m++) {
          repeat = false;
          if (perms[k][m] === perms[k][m+1]) {
            repeat = true;
            break;
          }
        }
        if (repeat === false) {
          result.push(perms[k]);
        }
      }
    }
    return result.length;
}
  
permAlone('aab');
  