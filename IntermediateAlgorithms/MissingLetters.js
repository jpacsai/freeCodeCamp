/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/


function fearNotLetter(str) {
    var result = str.split("");
    var missing = "none";
    for (var i = 0; i < result.length-1; i++) {
      var diff = result[i+1].charCodeAt(0) - result[i].charCodeAt(0);
      if (diff > 1) {
        missing = String.fromCharCode(result[i].charCodeAt(0)+1);
      }
    }
    if (missing === "none") {
      return undefined;
    }
    return missing;
}
  
fearNotLetter("abce");
  