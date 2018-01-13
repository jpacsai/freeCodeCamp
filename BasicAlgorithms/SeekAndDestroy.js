/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the 
same value as these arguments.

*/

function destroyer(arr) {
    var newArr = arguments[0];
    var remove = arguments;
    delete remove[0];
    remove = Object.values(remove);
    return newArr.filter(f => !remove.includes(f));
  }