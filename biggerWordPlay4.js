// Write a function that takes a string availableLetters as an argument and returns an array of all of the words that can be made from only those letters. Letters can be re-used
// as many times as needed and can appear in any order. Not all of the letters in availableLetters have to be used.

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

function useAllAvailibleLetters(words, str) {
  return words.filter((word) => {
    const letters = str.split("");
    let count = 0;
    word.split("").forEach((char) => {
      if (letters.includes(char)) {
        count += 1;
      }
    });
    return count === word.length;
  });
}

//console.log(useAllAvailibleLetters(scrabbleWords, "HOUSE"));

function useAllAvailibleLettersb(words, str) {
  return words.filter((word) => {
    const letters = new Set(str);

    return word.split("").every((char) => letters.has(char));
  });
}

console.log(useAllAvailibleLettersb(scrabbleWords, "ZPIA"));
