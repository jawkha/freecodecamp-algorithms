/**
 * Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
 */

function myReplace(str, before, after) {
  let arrayedStr = str.split(' ');
  let index = arrayedStr.indexOf(before);
  let stringAfterSearchAndReplace = '';

  function isCapitalLetter(char) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      return true;
    }
    return false;
  }

  // if the first letter of the before word is capital case,
  // we also capitalize the after word
  if (isCapitalLetter(before[0])) {
    after = after[0].toUpperCase().concat(after.slice(1));
  }
  // we replace the before word with the after word based
  // on its index in the array that we found earlier
  arrayedStr[index] = after;
  stringAfterSearchAndReplace = arrayedStr.join(' ');
  console.log(stringAfterSearchAndReplace);
  return stringAfterSearchAndReplace;
}

myReplace('Let us go to the store', 'store', 'mall'); // "Let us go to the mall"
myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'); // "He is Sitting on the couch"
myReplace('This has a spellngi error', 'spellngi', 'spelling'); // "This has a spelling error"
myReplace('His name is Tom', 'Tom', 'john'); // "His name is John"
myReplace('Let us get back to more Coding', 'Coding', 'algorithms'); // "Let us get back to more Algorithms"
