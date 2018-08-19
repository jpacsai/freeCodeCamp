/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.


*/

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName = function() {
      var arr = firstAndLast.split(" ");
      return arr[0];
    };
    this.getLastName = function() {
      var arr = firstAndLast.split(" ");
      return arr[1];
    };
    this.setFirstName = function(name) {
      var arr = firstAndLast.split(" ");
      arr[0] = name;
      firstAndLast = arr.join(" ");
    };
    this.setLastName = function(name) {
      var arr = firstAndLast.split(" ");
      arr[1] = name;
      firstAndLast = arr.join(" ");
    };
    this.setFullName = function(name) {
      firstAndLast = name;
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
