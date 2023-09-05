import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

function starsWithProEndswithIng(arr) {
  return arr.filter(
    (word) =>
      word.startsWith("PRO") && word.endsWith("ING") && word.length === 11
  );
}
console.log(starsWithProEndswithIng(scrabbleWords));
