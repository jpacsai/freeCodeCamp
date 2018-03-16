/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5

*/


function sumFibs(num) {
    var fibo = [1, 1];
    var n = 2;
    while (n <= num) {
      var f = fibo[n-1] + fibo[n-2];
      if (f <= num) { 
        fibo.push(fibo[n-1] + fibo[n-2]);
      }    
      else {
        break;
      }
      n++; 
    }
    var sum = fibo.reduce(function(total, num) {
      if (num % 2 !== 0) {
        total += num;
      }
      return total; 
    });
    return sum;
}

sumFibs(1000);
  