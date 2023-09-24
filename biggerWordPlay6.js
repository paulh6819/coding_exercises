import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

// First, what are all of the words that have a least one “A”,
// one “B”, one “C”, one “D”, one “E”, and one “F” in them, in any order?

function findWordsWithABCDEF(words) {
  return words.filter(hasABCDEF);
}

console.log(findWordsWithABCDEF(scrabbleWords));

function hasABCDEF(word) {
  const lettersArr = ["A", "B", "C", "D", "E", "F"];

  const letterOBj = {};
  word.split("").forEach((char) => {
    if (lettersArr.includes(char)) {
      letterOBj[char] = 1;
    }
  });

  let totalValue = Object.values(letterOBj).reduce((acc, key) => {
    acc += key;
    return acc;
  }, 0);
  if (totalValue === 6) {
    return true;
  }
}
