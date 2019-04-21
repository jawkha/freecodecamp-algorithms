/**
 * Basic Algorithm Scripting: Convert Celsius to Fahrenheit
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
 */
function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(0); // a value of 32
convertToF(-30); // a value of -22
convertToF(-10); // a value of 14
convertToF(0); // a value of 32
convertToF(20); // a value of 68
convertToF(30); // a value of 86
