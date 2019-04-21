/**
 * Basic Algorithm Scripting: Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
 */

function truncateString(str, num) {
  if (str.length <= num) return str;
  return str.substr(0, num).concat('...');
}

truncateString('A-tisket a-tasket A green and yellow basket', 8); // "A-tisket..."
truncateString('Peter Piper picked a peck of pickled peppers', 11); // "Peter Piper..."
truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length
); // "A-tisket a-tasket A green and yellow basket"
truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length + 2
); // "A-tisket a-tasket A green and yellow basket"
truncateString('A-', 1); // "A..."
truncateString('Absolutely Longer', 2); // "Ab..."
