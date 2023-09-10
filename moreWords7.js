import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

// [ ] Let’s assign letters the following points:
//     - W = 12
//     - Z = 15
//     - E = -17
//     - All other letters = 1

// What are all of the words with at least 50 points?

//1.set up a filter function on the array of scrabble words 2. a for loop that iterates through the letters. above the forloop
// ill have a counter to keep track of the points per letter 3. if the counter is above 50 by the for loop is done, return true

const letters = { W: 12, Z: 15, E: -17 };

const wordsOver50 = scrabbleWords.filter((word) => {
  let points = 0;
  for (const char of word) {
    if (letters[char]) {
      points += letters[char];
    } else {
      points += 1;
    }
  }
  if (points > 49) {
    console.log(points, word);
    return true;
  }
});

console.log(wordsOver50);

function compoundWords(arr) {
  return arr.filter((word) => {
    for (let smallerWord of arr) {
      for (let smallerWord2 of arr) {
        if (word === smallerWord + smallerWord2) {
          return true;
        }
      }
    }
    return false;
  });
}
console.log("is this working", compoundWords(scrabbleWords));
