/**
 * Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  let missingLetter;
  // we can iterate over each element of the string,
  // return its charCode and if it's not equal to the charCode of
  // first letter in the range plus it's index, this means that the letter before
  // it is missing. We can get that character from its charCode.
  for (let i = 1; i < str.length; i++) {
    let firstInRange = str[0].charCodeAt(0);
    if (str[i].charCodeAt(0) !== firstInRange + i) {
      missingLetter = String.fromCharCode(str[i].charCodeAt(0) - 1);
      return missingLetter;
    }
  }
  return missingLetter;
}

fearNotLetter('abce'); // "d"
fearNotLetter('abcdefghjklmno'); // "i"
fearNotLetter('stvwx'); // "u"
fearNotLetter('bcdf'); // "e"
fearNotLetter('abcdefghijklmnopqrstuvwxyz'); // undefined
