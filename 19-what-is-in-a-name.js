/**
 * Intermediate Algorithm Scripting: Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
 */

function whatIsInAName(collection, source) {
  let matches;

  // We will create a function that checks whether a given input object is
  // identical to or a superset of the source object. Based on this function,
  // we will filter the collection array to return only the objects which fulfill
  // the above mentioned criteria.
  function containsSource(objectToCheck) {
    let isAMatch;

    // First thing we do is generate arrays of both the objects' keys
    let keysObjectToCheck = Object.keys(objectToCheck);
    let keysSourceObject = Object.keys(source);

    // Then we iterate over the source object's keys array and do the following
    // checks:
    // 1. The object we are evaluating has at least the same number of keys
    //    as the source object. If not, it cannot be identical to or superset
    //    of the source object. If this check passes, we move to the 2nd.
    // 2. The object being evaluated contains the source object's key and its
    //    value is identical to that held by the source object with this key.
    //    If this is true as well, we move to the next iteration. If it's false
    //    we break out of the iteration.

    for (let i = 0; i < keysSourceObject.length; i++) {
      if (
        keysObjectToCheck.length >= keysSourceObject.length &&
        keysObjectToCheck.includes(keysSourceObject[i]) &&
        objectToCheck[keysSourceObject[i]] === source[keysSourceObject[i]]
      ) {
        isAMatch = true;
      } else {
        isAMatch = false;
        break;
      }
    }
    return isAMatch;
  }

  matches = collection.filter(obj => containsSource(obj) === true);
  console.log({ matches });
  return matches;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
); // [{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 }); // [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
whatIsInAName([{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], {
  apple: 1,
  bat: 2
}); // [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
whatIsInAName([{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }], {
  apple: 1,
  cookie: 2
}); // [{ "apple": 1, "bat": 2, "cookie": 2 }]
whatIsInAName([{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }, { bat: 2 }], {
  apple: 1,
  bat: 2
}); // [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }); // []
