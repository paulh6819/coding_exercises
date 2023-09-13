import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//longest word using "RSTLNE", make sure can handle ties

//create a for loop over the word list, check to make sure it only uses the accepted characters, break if a letter doesnt match 2,push to an arrry,
// then sort the array, largest to smallest and return everyone word that matches the length of the 0 index, make another forloop
//that goes over the newly sorted array, returns all the words that match the length of index[0], then breaks

//optimise for constanttime O(1)

const sortedArray = scrabbleWords
  .sort((a, b) => b.length - a.length)
  .filter((word) => {
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
console.log(sortedArray);

const result = [];

for (const word of sortedArray) {
  if (word.length === sortedArray[0].length) {
    result.push(word);
  } else {
    break;
  }
}

console.log(result);
