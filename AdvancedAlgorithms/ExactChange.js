/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

*/

function checkCashRegister(price, cash, cid) {
  var due = cash - price;
  var totalRegister = 0;
  var values = [["PENNY", 0.01], 
                ["NICKEL", 0.05], 
                ["DIME", 0.1], 
                ["QUARTER", 0.25], 
                ["ONE", 1], 
                ["FIVE", 5], 
                ["TEN", 10], 
                ["TWENTY", 20], 
                ["ONE HUNDRED", 100]];
  for (var i = 0; i < cid.length; i++) {
    values[i].push(Math.round(cid[i][1] / values[i][1]),cid[i][1]);
    totalRegister += cid[i][1];
  }
  totalRegister = Math.round(totalRegister * 100) / 100;

  if (due === totalRegister) {
    return "Closed";
  }
  else if (due > totalRegister) {
    return "Insufficient Funds";
  }
  else {
    console.log(values);
    var change = [];
    
    for (var j = values.length-1; j >= 0; j--) {
       if (due >= values[j][1] && values[j][3] !== 0) {
         var calc = Math.floor(due / values[j][1]);
         if (calc >= values[j][2]) {
           calc = values[j][2];
         }
         var amount = calc * values[j][1];
           
         change.push([values[j][0], amount]);
         values[j][2] -= calc;
         values[j][3] -= calc * values[j][1];
         due -= calc * values[j][1];
         due = Math.round(due * 100) / 100
           
       }
       if (due === 0) {
         console.log(change);
         return change;
       }
        
    }
    if (due > 0) {
          return "Insufficient Funds";
    }
  }
}