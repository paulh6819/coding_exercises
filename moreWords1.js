import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

function onlyUs(arr) {
  return arr.filter((word) => {
    const wordUpper = word.toUpperCase();

    if (
      wordUpper.includes("U") &&
      !wordUpper.includes("E") &&
      !wordUpper.includes("A") &&
      !wordUpper.includes("O") &&
      !wordUpper.includes("I")
    ) {
      return true;
    }
  });
}

console.log(onlyUs(scrabbleWords));
