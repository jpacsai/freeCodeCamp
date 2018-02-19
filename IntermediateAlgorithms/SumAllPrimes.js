/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

*/


function sumPrimes(num) {
    var prime = [];
    for (var n = 2; n <= num; n++) {
      var counter = 0;
      for (var o = 2; o <= n; o++) {
        if (n % o === 0) {
          counter++;
        }
      }
      if (counter === 1) {
        prime.push(n);
      }
    }
    var sum = prime.reduce(function(total, num) {
      return total + num; 
    });
    return sum;
}
  
sumPrimes(10);
  