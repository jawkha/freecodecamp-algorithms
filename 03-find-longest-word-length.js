/**
 * Basic Algorithm Scripting: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number.
 */

function findLongestWordLength(str) {
  let lengthMax = Math.max(...str.split(' ').map(el => el.length));
  return lengthMax;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog'); // 6
findLongestWordLength('May the force be with you'); // 5
findLongestWordLength('Google do a barrel roll'); // 6
findLongestWordLength('What is the average airspeed velocity of an unladen swallow'); // 8
findLongestWordLength('What if we try a super-long word such as otorhinolaryngology'); // 19
