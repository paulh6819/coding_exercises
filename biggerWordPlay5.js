import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//What are all of the compound words? These are words made up of 2 smaller words. For example, “SNOWMAN” is a compound word made
// from “SNOW” and “MAN”, and “BEACHBALL” is a compound word made from “BEACH” and “BALL”.
console.log("hey");

function combinedWords(words) {
  const combinedWords = [];

  for (let word of words) {
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length; j++) {
        if (word !== words[i] && word + words[i] === words[j]) {
          combinedWords.push(word);
        }
      }
    }
  }
  return combinedWords;
}

console.log(combinedWords(scrabbleWords));

//this one is about testing the time and using set
