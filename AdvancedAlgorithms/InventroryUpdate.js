/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

*/


function updateInventory(arr1, arr2) {
    var newInv = [];
    var arr = arr1.concat(arr2);
    for (var i = 0; i < arr.length; i++) {
      var updated = false;
      for (var j = 0; j < newInv.length; j++) {
        if (newInv[j][1] === arr[i][1]) {
          newInv[j][0] += arr[i][0];
          updated = true;
        }
      }
      if (updated === false) {
        newInv.push(arr[i]);
      }
    }
    newInv.sort((a, b) => {
          if (a[1] > b[1]) {
              return 1;
          }
          if (a[1] < b[1]) {
              return -1;
          }
          return 0;
    });
    return newInv;
}
  
updateInventory(curInv, newInv);
  