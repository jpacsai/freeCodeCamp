/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

*/

function translatePigLatin(str) {
    var vowel = ["a","e","i","o","u"];
    var latin;
    if (vowel.includes(str[0])) {
      latin = str + "way";
    }
    else {
      var index = 0;
      for (var i = 0; i < str.length; i++) {
        if (vowel.includes(str[i]) === true) {
          index = i;
          latin = str.slice(index) + str.slice(0,index) + "ay";
          break;
        }
      }
      
      
    }
    return latin;
}
  
translatePigLatin("consonant");