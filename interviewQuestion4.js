// Write code that:

// - Accepts a string (e.g. as an argument to a function, or as a command-line argument). This string represents your Scrabble “rack”.
// - Prints out the words that can be made from the characters in that input string, along with their Scrabble scores, one word per line, in descending score order

// Example input and output:

// `$ python scrabble_cheater.py SPCQEIU  # Use any language you like.`
// `17 piques`
// `17 equips`
// `16 quips`
// `16 pique`
// `16 equip`
// `15 quip`
// `…`

// Resources:

// - Word list
// - Letter scores

// Key points:

// - Letters cannot be reused. For example, if your Scrabble rack is “ABCD”, you can make the word “CAB” but not the word “DAD”, because you only have one “D”.
// -

//1. input any string of letters, up to 7 characters, output: all words that can be made up of characters, without repeating a character.
//2. created a nested forloop that has a sliding window and goes over the input string and produces an array with every possible combo.
//3. see if each combo is in the array of scrabble words.

//4. instead of the above check each letter aginst each word removing matched letters in the scrabble word as we iterate from our characters and
//counting as we go and if the length of the scrabble word matches the counter then every letter is included, but we also have to remove the character
// from the character array as well so we dont count characters twice.
import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");
const scrabbleWordDicts = scrabbleWords.map((word) => creatWordObject(word));

function creatWordObject(word1) {
  return word1.split("").reduce(
    (acc, char) => {
      if (!acc[char]) {
        acc[char] = 1;
      } else {
        acc[char] += 1;
      }
      return acc;
    },
    { word: word1 }
  );
}

let wordsTest = ["CAT", "DOG", "TACK", "BASE", "DO", "ODD", "GO", "OG"];

//If there is an underscore, we can return all words that the counter equals to the length of the string minus 1 and then the counter can just be an
//automatic 2, we can keep the same function if there isnt an underscore present, if one (or more) underscore is present then we examine the scrabbels with
// a differnt function

function checkingLetters(str, words) {
  const resultArry = [];
  for (let word of words) {
    let result = checkWord(str, word);
    if (result) {
      resultArry.push(result);
    }
  }
  return resultArry;
}

function checkWord(str, word) {
  let splitStr = str.split("");
  let counter = 0;
  for (let char of word) {
    if (splitStr.includes(char) || splitStr.includes("_")) {
      counter += 1;
      // remove the char from my original array if it indeed exits
      let indexOfCharacterToSPlice = splitStr.indexOf(char);
      // console.log(indexOfCharacterToSPlice);
      splitStr.splice(indexOfCharacterToSPlice, 1);
    } else {
      return null;
    }
    if (counter === word.length) {
      return word;
    }
  }
  return null;
}

function findWordsBlackTilesFactoredIn(str, words) {}

console.time("myCode");
console.log(checkingLetters("HEY", scrabbleWords));
console.timeEnd("myCode");

//do this again but use dictionary

function findOtherWordsWithDictionary(word1) {
  let resultArr = [];
  let givenStr = creatWordObject(word1);
  for (let word3 of scrabbleWordDicts) {
    // let word3 = creatWordObject(word3);
    let counter = 0;
    let wordsKeysLength = Object.keys(word3).length;
    for (let char in word3) {
      if (word3[char] === givenStr[char] || word3[char] < givenStr[char]) {
        counter += 1;
      } else {
        break;
      }
      if (counter === wordsKeysLength) {
        resultArr.push(word3);
      }
    }
  }
  return resultArr.map((obj) => {
    return obj.word;
  });
}

console.log(findOtherWordsWithDictionary("HEY"));

// and do this again using trie or whatever is best to make is faster

//this is what CHATgpt says would be more professional, and I would like to get some opinions from my mentors on these things( it went on about
//error handling and more modularity)

// import { readFileSync } from 'fs';

// class WordChecker {
//     constructor(filepath) {
//         this.words = this.loadWords(filepath);
//     }

//     loadWords(filepath) {
//         try {
//             return readFileSync(filepath, 'utf8').trim().split(/\r?\n/);
//         } catch (error) {
//             console.error('Error reading the file:', error);
//             return [];
//         }
//     }

//     findWords(str) {
//         return this.words.filter(word => this.canFormWord(str, word));
//     }

//     canFormWord(str, word) {
//         let letters = str.split('');
//         for (let char of word) {
//             const index = letters.indexOf(char);
//             if (index === -1) return false;
//             letters.splice(index, 1);
//         }
//         return true;
//     }
// }

// const checker = new WordChecker('./sowpods.txt');
// console.log(checker.findWords('SKATE'));

//  do this next!!

// Part 2

// Extend the script to handle blank tiles. When reading the input, the character _ can be used as a wildcard — it can represent any letter.

// Wildcards do not count towards a word's score.
