import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//longest word no repeats

function noRepeats(words) {
  return words.reduce((acc, word) => {
    //  console.log(new Set(word.split("")).size);
    //let newWord = acc;

    if (new Set(word.split("")).size > new Set(acc.split("")).size) {
      return word;
    } else {
      return acc;
    }
  }, "");
}
console.log(noRepeats(scrabbleWords));
