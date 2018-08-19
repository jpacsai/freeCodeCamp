/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/

function convertHTML(str) {
    // &colon;&rpar;
    var entities = {
      "&" : "&amp;",
      "<" : "&lt;",
      ">" : "&gt;",
      '"' : "&quot;",
      "'" : "&apos;"
    };
    var arr = str.split("").map(function(c) {
      return entities[c] || c;
    });
    return arr.join("");
}
  
convertHTML("Dolce & Gabbana");