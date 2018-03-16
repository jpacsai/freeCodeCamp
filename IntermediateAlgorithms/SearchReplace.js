/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/

function myReplace(str, before, after) {
    var newStr = str.split(" ");
    for (var i = 0; i < newStr.length; i++) {
      if (newStr[i].toLowerCase() === before.toLowerCase()) {
        if (newStr[i].charCodeAt(0) < 91) {
          newStr[i] = after.slice(0,1).toUpperCase() + after.slice(1);
        }
        else {
          newStr[i] = after;
        }
      }
    }
    return newStr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");