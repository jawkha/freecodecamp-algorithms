/**
 * https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  let indexToInsert = 0;

  for (let i = 0; i < arr.length; i++) {
    // If it's an empty array, the element will be inserted at the first index, i.e. 0;
    if (arr.length === 0) {
      indexToInsert = 0;
    }
    // When iterating over an array which is sorted in an ascending order, the first
    // index value for which the element is greater than num, will be the index where
    // the new number should be inserted.
    if (arr[i] >= num) {
      indexToInsert = i;
      break;
      // If none of the elements are greater than num, it means that num should be inserted
      // at the end of the array.
    } else {
      indexToInsert = arr.length;
    }
  }
  console.log(indexToInsert);
  return indexToInsert;
}

getIndexToIns([10, 20, 30, 40, 50], 35); // 3.
getIndexToIns([10, 20, 30, 40, 50], 30); // 2.
getIndexToIns([40, 60], 50); // 1.
getIndexToIns([3, 10, 5], 3); // 0.
getIndexToIns([5, 3, 20, 3], 5); // 2.
getIndexToIns([2, 20, 10], 19); // 2.
getIndexToIns([2, 5, 10], 15); // 3.
getIndexToIns([], 1); // 0.
