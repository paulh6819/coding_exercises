import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//What are all of the words that have at least 3 different double letters? For example,
//BOOKKEEPER” is an answer to this question because it has a double-O, a double-K, and a double-E.

function threeDoubleLetters(words) {
  return words.filter((word) => {
    let letterCount = 0;
    let splitWord = word.split("");
    for (let char of splitWord) {
      if (indexOf(char) !== lastIndexOf(char)) {
        letterCount += 1;
      }
    }
    if (letterCount > 2) {
      return true;
    }
  });
}
//console.log(threeDoubleLetters(scrabbleWords));
