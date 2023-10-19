import { count } from "console";
import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

// First, what are all of the words that have a least one “A”,
// one “B”, one “C”, one “D”, one “E”, and one “F” in them, in any order?

function findWordsWithABCDEF(words) {
  return words.filter(hasABCDEF);
}

console.log(findWordsWithABCDEF(scrabbleWords));

function hasABCDEF(word) {
  const lettersArr = ["A", "B", "C", "D", "E", "F"];

  const letterOBj = {};
  word.split("").forEach((char) => {
    if (lettersArr.includes(char)) {
      letterOBj[char] = 1;
    }
  });

  let totalValue = Object.values(letterOBj).reduce((acc, key) => {
    acc += key;
    return acc;
  }, 0);
  if (totalValue === 6) {
    return true;
  }
}

//longest AlpebetChain

let abc = "ABC";

// function longestChainAndWordsItCanMake(words) {
//   let longestChain = [];

//   for (let word of words) {
//     let longestChainOfWord = [];
//     let currentChain = [];
//     for (let i = 0; i < word.length; i++) {
//       let numNum = 0;
//       console.log("this is the char count", word.charCodeAt(numNum + 1));
//       if (
//         word.charCodeAt(i) + 1 === word.charCodeAt(i + 1) &&
//         currentChain.length < 1
//       ) {
//         currentChain.push(word[i] + word[i + 1]);
//       } else if (
//         word.charCodeAt(i) + 1 === word.charCodeAt(i + 1) &&
//         currentChain.length > 1
//       ) {
//         currentChain.push(word[i]);
//       }
//     }
//     if (currentChain.length > 2) {
//       longestChain.push(currentChain);
//     }
//   }
//   return longestChain;
// }
// console.log(longestChainAndWordsItCanMake(abc));

function longestChain2(words) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let possibleChains = [];

  for (let i = 0; i < letters.length; i++) {
    for (let j = i + 2; j < letters.length; j++) {
      possibleChains.push(letters.slice(i, j));
    }
  }
  let includedCombos = [];
  let includedCombos2 = [];
  possibleChains.forEach((combo) => {
    // if (words.includes(combo)) {
    //   includedCombos.push(combo);
    // }
    for (let word of words) {
      if (word.includes(combo)) includedCombos2.push(combo);
    }
  });

  //return includedCombos;
  return includedCombos2.sort((a, b) => b.length - a.length)[0];
}

function longestChain3(words) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let possibleChains = [];

  for (let i = 0; i < letters.length; i++) {
    for (let j = i + 2; j < letters.length; j++) {
      possibleChains.push(letters.slice(i, j));
    }
  }

  let includedCombos2 = [];

  //take every word in the array and make a counter and keep track is a char from the combo was in the word, and if the ]
  // counter === in length to the length of the combo and the combo was longer than the previous result combo then replace
  // the result combo

  possibleChains.forEach((combo) => {
    let splitCombo = combo.split("");
    for (let word of words) {
      let counter = 0;
      for (let char of splitCombo) {
        if (word.split("").includes(char)) {
          counter += 1;
        }
        if (counter === splitCombo.length) {
          includedCombos2.push(word);
        }
      }
    }
  });

  //return includedCombos sorted first item
}

function longestChain4(words) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let possibleChains = [];

  for (let i = 0; i < letters.length; i++) {
    for (let j = i + 2; j < letters.length; j++) {
      possibleChains.push(letters.slice(i, j));
    }
  }

  possibleChains.sort((a, b) => b.length - a.length);
  console.log(possibleChains);

  let longestCombo = "";
  let result = "";

  //within the foreach we have a for loop that goes through everyword, and sorts each word as they come,
  // and places them into a set and then we test each combo to see if the set has the combo within it, if it does, we
  // we can push the combo to the includedcombos array and return the longest item in the array

  for (let possibleChain of possibleChains) {
    console.log(possibleChain);
    if (result.length > 0) {
      break;
    }

    for (let word of words) {
      let setWord = new Set(word);
      let wordReducedSorted = [...setWord].sort().join("");
      if (wordReducedSorted.includes(possibleChain)) {
        // longestCombo = possibleChain;
        result = `${possibleChain} ${word}`;
        break;
      }
    }
  }

  // possibleChains.forEach((possibleChain) => {
  //   console.log(possibleChain);
  //   if (possibleChain.length <= longestCombo.length) {
  //     return;
  //   }

  //   for (let word of words) {
  //     let setWord = new Set(word);
  //     let wordReducedSorted = [...setWord].sort().join("");
  //     if (wordReducedSorted.includes(possibleChain)) {
  //       longestCombo = possibleChain;
  //       result = `${possibleChain} ${word}`;
  //       break;
  //     }
  //   }
  // });

  return result;
}

console.log(longestChain4(scrabbleWords));
