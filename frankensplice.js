/**
 * You are given two arrays and an index. Use the array methods slice and splice to copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.
 */

function frankenSplice(arr1, arr2, n) {
  //   let newArrayStart = arr2.slice(0, n)
  //   let newArrayEnd = arr2.slice(n);
  //   let newArray = [...newArrayStart, ...arr1, ...newArrayEnd]
  let newArray = [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
  return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
