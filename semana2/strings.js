let str = "Hello, world!";

/*
  length:
  Gets the length of the string.
*/
console.log(str.length); // Output: 13

/*
  charAt:
  Returns the character at a specific index.
*/
console.log(str.charAt(0)); // Output: H

/*
  includes:
  Checks if a string contains a specified substring.
*/
console.log(str.includes("world")); // Output: true

/*
  indexOf:
  Returns the index of the first occurrence of a specified substring.
*/
console.log(str.indexOf("o")); // Output: 4

/*
  slice:
  Extracts a part of the string and returns it as a new string.
*/
console.log(str.slice(7, 12)); // Output: world

/*
  substring:
  Similar to slice, but can’t accept negative indices.
*/
console.log(str.substring(0, 5)); // Output: Hello

/*
  substr:
  Extracts a part of the string, starting from a specified position and extending for a given number of characters.
*/
console.log(str.substr(7, 5)); // Output: world

/*
  toLowerCase:
  Converts the string to lowercase.
*/
console.log(str.toLowerCase()); // Output: hello, world!

/*
  toUpperCase:
  Converts the string to uppercase.
*/
console.log(str.toUpperCase()); // Output: HELLO, WORLD!

/*
  trim:
  Removes whitespace from both ends of the string.
*/
let messyStr = "   Hello, world!   ";
console.log(messyStr.trim()); // Output: Hello, world!

/*
  replace:
  Replaces a specified value with another value in a string.
*/
console.log(str.replace("world", "there")); // Output: Hello, there!

/*
  split:
  Splits a string into an array of substrings.
*/
console.log(str.split(", ")); // Output: [ 'Hello', 'world!' ]
