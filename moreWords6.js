import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

// What is the longest word that can be made without the letters in “AEIOSHRTN”
// (in other words, without the most common letters)? Make sure your solution can handle ties.

//1.make a result array 2. I want to split up the string of letters that arent allowed 3. make a fopr loop over each word on the list
//run it through another for loop checking each letter against the forbidden letters. 4. if one of the letters in included in the forbidden letter
// break the foo loop, 6, return the word to the result array 7. return the result

const testPass = ["ZUG"];
const testFail = ["ANT"];

//solve again with a couple higher order function, perhaps a set

function lettersNotInWord(cantUse, words) {
  let result = [];

  let cantUseSplit = cantUse.split("");

  for (const word of words) {
    let charCounter = 0;
    for (const char of word) {
      if (cantUseSplit.includes(char)) {
        break;
      } else {
        charCounter += 1;
      }
    }
    if (word.length === charCounter) {
      result.push(word);
    }
  }
  return result;
}

console.log(lettersNotInWord("AEIOSHRTN", scrabbleWords));

//notes:
// paramaters are the place holders -  (parking spaces)
// arguments are the data - (cars)
// go back and solve everyone that I can with sets, word play - think about why code might run faster

function usingSet(str, scrabbleWords) {
  return scrabbleWords.filter((word) => {
    let setWord = new Set(word.split(""));
    let setLetters = new Set(str.split(""));
    let setTogether = new Set([...setLetters, ...setWord]);
    if (setWord.size + setLetters.size === setTogether.size) {
      return true;
    }
  });
}
console.log("using set", usingSet("AEIOSHRTN", scrabbleWords));

//solve just using filter
function filtersWord(str, scrabbleWords) {
  return scrabbleWords.filter((word) => {
    const splitString = str.split("");
    for (const char of word) {
      if (splitString.includes(char)) {
        return false;
      }
    }
    return true;
  });
}

console.log(
  "using filter without set.",
  filtersWord("AEIOSHRTN", scrabbleWords)
);

function atLeast8UsesAtleastThree(words) {
  return words.filter(
    (word) => word.length > 7 && new Set(word.split("")).size < 4
  );
}

console.log(atLeast8UsesAtleastThree(scrabbleWords));
