/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */
function chunkArrayInGroups(arr, size) {
  const chunked = [];
  for (let i = 0; i < arr.length; i + size) {
    chunked.push(arr.splice(i, i + size));
  }
  return chunked;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2); // [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
