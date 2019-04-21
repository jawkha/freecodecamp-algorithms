/**
 * Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
 */

function diffArray(arr1, arr2) {
  let diffed = [];
  let combined = [...arr1, ...arr2];
  for (let i = 0; i < combined.length; i++) {
    if (arr1.includes(combined[i]) && arr2.includes(combined[i])) {
      continue;
    }
    diffed.push(combined[i]);
  }
  //   console.log(diffed);
  return diffed;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4].
diffArray(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
); // ["pink wool"].
diffArray(
  ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
); // ["diorite", "pink wool"].
diffArray(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']); // [].
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4].
diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]); // ["piglet", 4].
diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']); // ["snuffleupagus", "cookie monster", "elmo"].
diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']); // [1, "calf", 3, "piglet", 7, "filly"].
