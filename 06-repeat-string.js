/**
 * Basic Algorithm Scripting: Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num) {
  let repeated = '';
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      repeated += str;
    }
  }
  return repeated;
}

repeatStringNumTimes('*', 3); // "***"
repeatStringNumTimes('abc', 3); // "abcabcabc"
repeatStringNumTimes('abc', 4); // "abcabcabcabc"
repeatStringNumTimes('abc', 1); // "abc"
repeatStringNumTimes('*', 8); // "********"
repeatStringNumTimes('abc', -2); // ""
