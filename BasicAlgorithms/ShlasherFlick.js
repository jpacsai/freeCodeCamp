/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

*/

function slasher(arr, howMany) {
    var result = (howMany >= arr.length) ? [] : arr.slice(-(arr.length-howMany));
    return result;
}