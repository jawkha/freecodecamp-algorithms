/**
 * Intermediate Algorithm Scripting: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object.
 */

function destroyer(arr) {
  const args = [...arguments].slice(1);

  for (let i = 0; i < args.length; i++) {
    arr = arr.filter(el => el !== args[i]);
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // [1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // [1]
destroyer([2, 3, 2, 3], 2, 3); // []
destroyer(['tree', 'hamburger', 53], 'tree', 53); // ["hamburger"]
destroyer(
  ['possum', 'trollo', 12, 'safari', 'hotdog', 92, 65, 'grandma', 'bugati', 'trojan', 'yacht'],
  'yacht',
  'possum',
  'trollo',
  'safari',
  'hotdog',
  'grandma',
  'bugati',
  'trojan'
); // [12, 92,65]
