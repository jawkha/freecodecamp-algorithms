function titleCase(str) {
  let capitalized = str
    .toLowerCase()
    .split(' ')
    .map(el =>
      el
        .slice(0, 1)
        .toUpperCase()
        .concat(el.slice(1))
    )
    .join(' ');

  console.log(capitalized);
  return capitalized;
}

titleCase("I'm a little tea pot");

// convert the string to lower case
// lower case string converted to array
// each element in the array is now a word
// replace first letter of each word with its capitalized version
