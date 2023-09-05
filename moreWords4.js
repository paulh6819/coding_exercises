import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//all words from the letters 'RSTLNE', not every letter needs to be used
// make a filter function, have an array with the letters, and then a for loop over each word
// being filtered, checking if the vowels array contains each character, make a count variable to keep track of each letter
// one doesnt belong to the array, return false

console.time("test");
const containsLetters = scrabbleWords.filter((word) => {
  const lettersArray = ["R", "S", "T", "N", "E", "L"];

  let letterCount = 0;
  for (const char of word) {
    if (lettersArray.includes(char)) {
      letterCount += 1;
    }
  }
  if (letterCount === word.length) {
    return true;
  }
});

console.log(containsLetters);
console.timeLog("test");

console.time("test2");
const containsLetters2 = scrabbleWords.filter((word) => {
  const lettersArray = ["R", "S", "T", "N", "E", "L"];

  let letterCount = 0;
  for (const char of word) {
    if (lettersArray.includes(char)) {
      letterCount += 1;
    } else {
      return false;
    }
  }
  if (letterCount === word.length) {
    return true;
  }
});

console.log(containsLetters2);
console.timeLog("test2");
