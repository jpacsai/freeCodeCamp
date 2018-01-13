/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

function titleCase(str) {
    var newStr = str.toLowerCase().split(" ");
    var res = [];
    for (var i = 0; i < newStr.length; i++) {
      var temp = newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1);
      res.push(temp);
    }
    return res.join(" ");
  }