/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".

*/


function spinalCase(str) {
    for (var i = 0; i < str.length-1; i++) {
      var t = str[i+1].match(/[A-Z]/);
      if (str[i] === " " || str[i] === "_") {
        str = str.slice(0,i) + "-" + str.slice(i+1);
      }
      if (str[i].match(/[A-Z]/) != null) {
        if (str[i-1] !== "-" && i !== 0) {
          str = str.slice(0,i) + "-" + str.slice(i,i+1).toLowerCase() + str.slice(i+1);
        }
        else {
          str = str.slice(0,i+1).toLowerCase() + str.slice(i+1);
        }
      }
    }
    return str;
}
  
spinalCase('This Is Spinal Tap');
  