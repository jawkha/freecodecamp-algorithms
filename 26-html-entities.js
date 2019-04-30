/**
 * Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
NOTE: When solving it, came across an odd finding. The strings '&​quot;' and '&​apos;' when manually typed into
the VS Code Text Editor were recognised as different from the same strings used in FCC's test assertions.
However, when I copied the strings from the assertions in the switch statements, the tests would pass in FCC.
However, the same would start failing in VS Code unless I typed the strings manually into VS Code.
 */

function convertHTML(str) {
  const array = str.split('');
  const convertedArray = [];
  let convertedString;

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case '&':
        convertedArray.push('&amp;');
        break;

      case '<':
        convertedArray.push('&lt;');
        break;

      case '>':
        convertedArray.push('&gt;');
        break;

      case '"':
        convertedArray.push('&​quot;');
        break;

      case "'":
        convertedArray.push('&​apos;');
        break;

      default:
        convertedArray.push(array[i]);
    }
  }
  convertedString = convertedArray.join('');
  console.log(convertedString);
  return convertedString;
}

convertHTML('Dolce & Gabbana'); // Dolce &​amp; Gabbana
convertHTML('Hamburgers < Pizza < Tacos'); // Hamburgers &​lt; Pizza &​lt; Tacos
convertHTML('Sixty > twelve'); // Sixty &​gt; twelve
convertHTML('<>'); // &​lt;&​gt;
convertHTML('abc'); // abc
convertHTML('Stuff in "quotation marks"'); // Stuff in &​quot;quotation marks&​quot;
convertHTML("Schindler's List"); // Schindler&​apos;s List
