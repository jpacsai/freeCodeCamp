/*
Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.

*/

function repeatStringNumTimes(str, num) {
    var res = "";
    for (var i = 1; i <= num; i++) {
      res += str;
    }
    return str;
}