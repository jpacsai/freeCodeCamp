/*
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

*/


function sym(args) {
    // count arguments
    var t = Object.keys(arguments).length;
    // set first argument as Difference to compare another argument against
    var d = arguments[0];
    // remove duplicates from first argument
    var x = d.length;
    while (x--) {
        if (d.indexOf(d[x]) != x) {
          d.splice(x,1);
        }
    }

    for (var i = 1; i < t; i++) {
      // set another argument to compare with
      var a = arguments[i];
      // remove duplicates
      var y = a.length;
      while (y--) {
        if (a.indexOf(a[y]) != y) {
          a.splice(y,1);
        }
      }
      // join Difference with another argument
      d = d.concat(a);
      // remove both if multiples
      var j, tmp;
      for(j = 0; j < d.length; j++) {
          tmp = d.lastIndexOf(d[j]);
          if (tmp !== j) {
              d.splice(tmp, 1);
              d.splice(j, 1);
              j--;
          }
      }
    }
    d = d.sort((a,b) => {return a-b;});
    return d;
  }
  
  sym([1, 2, 3], [5, 2, 1, 4]);
  