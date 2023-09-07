import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//return words with the prefix suffice and length
anything(1, 2, 3);
// make a function with 4 arugemnts 2. first takes the array, 2nd prefix, suffice, thrid length
//3. use filter argument to pulls out accecpted words, use stateswith, endswith, and use .legnth to check if the word is correct

function wordFinder(arr, prefix, suffix, length) {
  return arr.filter(
    (word) =>
      word.startsWith(prefix) && word.endsWith(suffix) && word.length === length
  );
}

console.log(wordFinder(scrabbleWords, "TRE", "ING", 9));

// look up fucntion declaraions and function statements

function anything(x, ...args) {
  console.log(arguments);
  console.log("in function", args);
}
