import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//Write a function that takes a string substring as an argument and returns an array of all
//of the words that contain that substring (the substring can appear anywhere in the word).
// 1.create a function, with two paramaters 2.use a filter function,  check the subarray thats
//within the 2nd parameter against the words as they iterate 3, return all the words that include
// the subarray

function subArryIncludes(wordsArray, subStr) {
  return wordsArray.filter((word) => word.includes(subStr));
}
console.log(subArryIncludes(scrabbleWords, "YY"));
