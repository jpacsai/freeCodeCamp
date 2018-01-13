/*
Return true if the string in the first element of the array contains all of the letters of the string 
in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are 
present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present 
in "Alien".


*/

function mutation(arr) {
    var word = arr.slice(0);
    var check = (arr[0].length > arr[1].length) ? arr[1].toLowerCase().split("") : arr[0].toLowerCase().split("");
    word.splice(arr.indexOf(check),1);
    word = word.toString().toLowerCase();
    for (var i = 0; i < check.length; i++) {
      if (word.includes(check[i]) === false) {
        return false;
      }
    }
    return true;
  }