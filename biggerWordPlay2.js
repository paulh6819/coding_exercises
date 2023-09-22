import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//What are all of the words that are at least 8 letters long and use 3 or fewer different letters? For example,
//“REFERRER” is an answer to this question, because it uses only 3 different letters: R, E, and F.

function usesOnlyThreeLetters(words) {
  return words.filter((word) => new Set(word).size < 4 && word.length > 7);
}

console.log(usesOnlyThreeLetters(scrabbleWords));
