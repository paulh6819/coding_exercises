import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

// Write a function that takes a string prefix as an argument and returns an array of all of the
// words that start with that prefix (the prefix has to be at the beginning of the word).

//make a function with two parameters, one that takes the array of words , another that takes a subtring
//2. in the function make a filter function that returns all words that start with prefix 3. use starts with, sinice it's at the begining

function hasPrefix(arr, str) {
  return arr.filter((word) => word.startsWith(str));
}

console.log(hasPrefix(scrabbleWords, "SHA"));
