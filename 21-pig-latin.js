/**
 * Intermediate Algorithm Scripting: Pig Latin
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // If the first letter of the string is a vowel,
  // we cimply add 'way' to the end of the string and return it.
  if (vowels.includes(str[0])) {
    return str.concat('way');
  } else {
    // Otherwise, we iterate over the length of the string to
    // find first instance of a vowel. We return a new string
    // which starts with that portion of the string which begins
    // with this vowel and the part of the string before the vowel
    // is concatenated to it alongwith the letters 'ay'
    for (let i = 1; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        return str
          .slice(i)
          .concat(str.slice(0, i))
          .concat('ay');
      }
    }
  }
  // if there are no vowels in the string, we simply
  // add 'ay' to the end of the string and return it.
  return str.concat('ay');
}

translatePigLatin('consonant');

translatePigLatin('california'); // "aliforniacay"
translatePigLatin('paragraphs'); // "aragraphspay"
translatePigLatin('glove'); // "oveglay"
translatePigLatin('algorithm'); // "algorithmway"
translatePigLatin('eight'); // "eightway"
//  Should handle words where the first vowel comes in the end of the word
//  Should handle words without vowels
