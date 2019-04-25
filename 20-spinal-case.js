/**
 * Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
  // To solve this, we are going to use the UTF-16 character codes
  // of each character in the string.

  // The variable finalStr will eventually represent the input string
  // in spinal case. Here, we initialize it with the first letter of
  // the input string in lower case.
  let finalStr = str[0].toLowerCase();

  // First, we will create 2 helper functions to determine whether a character
  // is a small letter or a capital letter.
  function isSmallLetter(char) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      return true;
    }
    return false;
  }

  function isCapitalLetter(char) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      return true;
    }
    return false;
  }

  // Now we will iterate over each character in the string and make the following checks:
  // Is it a small letter?
  //    If yes, we will simply add it to the end of finalStr.
  //    If no, we will then check, is it a capital letter?
  //        If the answer to this is no as well, then it means
  //        that the character is neither a small letter or a capital letter and it has no place
  //        in the finalStr because spinal case includes only letters and dashes.
  //        (see explanation below), so we will replace it with a dash ('-').
  //        We can make an additional check for whether the character is a dash or not, but since
  //        we are going to replace all non-letter characters with a dash anyway,
  //        we are skipping this check.
  //    If the character is a capital letter, then we are going to make the following checks:
  //        Is there currently a dash at the end of the finalStr?
  //            If yes, then it means that we don't need to add another dash and will
  //            will only add the lowerCase form of this character to the end of this
  //            string.
  //        If there isn't already a dash at the end of the string, then we will add both a
  //        dash and the lowerCase form of this character to the end of finalStr.
  // Finally, we return the completed finalStr which should show the str input in spinal case.

  for (let i = 1; i < str.length; i++) {
    if (isSmallLetter(str[i])) {
      finalStr += str[i];
    } else {
      if (isCapitalLetter(str[i])) {
        if (finalStr[finalStr.length - 1] === '-') {
          finalStr += str[i].toLowerCase();
        } else {
          finalStr += `-${str[i].toLowerCase()}`;
        }
      } else {
        finalStr += '-';
      }
    }
  }
  console.log(finalStr);
  return finalStr;
}

spinalCase('This Is Spinal Tap'); // "this-is-spinal-tap"
spinalCase('thisIsSpinalTap'); // "this-is-spinal-tap"
spinalCase('The_Andy_Griffith_Show'); // "the-andy-griffith-show"
spinalCase('Teletubbies say Eh-oh'); // "teletubbies-say-eh-oh"
spinalCase('AllThe-small Things'); // "all-the-small-things"

// at least in this context. Maybe, it can include numbers as well which
// we are not checking for here.
