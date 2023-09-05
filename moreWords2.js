import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//only E's for vowels and at least 15 letters long

function onlyEsAnd15(arr) {
  return arr.filter((word) => {
    const upperCaseWord = word.toUpperCase();
    if (!upperCaseWord.includes("E") || word.length < 15) {
      return false;
    }
    const vowelsNotE = ["A", "I", "U", "O"];
    return upperCaseWord.split("").every((char) => {
      if (vowelsNotE.includes(char)) {
        return false;
      } else {
        return true;
      }
    });
  });
}

console.log("word with E", onlyEsAnd15(scrabbleWords));
