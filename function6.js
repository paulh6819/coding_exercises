// Write a function that takes a string phrase and returns a
// dictionary containing counts of how many times every character appears in phrase.

//1. a function that takes a string for an argument 2. have a results dictionary 3. use a for loop to iterate over the string and
//update the dicionary with a character count. 3. first conditon is to check for undefined, if undefined, char eqauls one, if not
// add one

function letterDictionary(str) {
  const dict = {};

  for (const char of str) {
    if (dict[char] === undefined) {
      dict[char] = 1;
    } else {
      dict[char] += 1;
    }
  }

  return dict;
}

console.log(letterDictionary("Hello World!!!"));

//using ? operator for practice

function questionMarkOperator(str) {
  const result = {};
  for (const char of str) {
    result[char] = result[char] ? result[char] + 1 : (result[char] = 1);
  }
  return result;
}

console.log(questionMarkOperator("hello underdog devs"));

//use map
// practice with debugger
