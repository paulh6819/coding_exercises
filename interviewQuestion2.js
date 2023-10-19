// Write a function that counts of the number of ships in a 2D grid.

// - Input: an array of arrays of strings, representing a 2D grid. The strings are either a `"."` for open water, or an `"S"` for part of a ship. Connected `"S"`es are part of the same ship.
// - Output: an integer that is the count of the number of ships in the grid.

// Facts about ships:

// - Ships are only horizontal or vertical, not diagonal.
// - Ships have a width of one or more and a height of one or more.
// - Ships never touch each other.

// The input will always be a well-formed grid (all rows are the same length).

// Example function calls

//     let ships = [
//         [".", "S", ".", "S"],
//         [".", ".", ".", "S"],
//         ["S", "S", ".", "S"],
//         [".", ".", ".", "S"]
//     ]

//     countShips(ships) -> 3

//     let ships = [
//         ["S", "S", ".", "S", "S", "S", ".", "."],
//         ["S", "S", ".", "S", "S", "S", ".", "."],
//         ["S", "S", ".", ".", ".", ".", "S", "S"]
//     ]
//     countShips(ships) -> 3

//1. input an array of arrays, output number of ships. 2. start with a forloop going over each item in the initial array, and then a another
// forloop for the individul items in the array 3. we can determine if its a single S ship by checking the char right below and on either said

//look up how to deal with matrices

function enigma(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // if(arr[i][j] === "S"){
      //     if()
      // }
      //In order
      //checking for single S ship in first row
      //  &&  arr[i][j + 1]){}
    }
  }
}

const x = "was'n'   t this a big experiment after all - hello world...";

function findNstring(n, string) {
  let replacedWhiteSpace = string.replaceAll(" ", "");
  let result = "";
  let counter = 0;
  for (let char of replacedWhiteSpace) {
    counter += 1;
    result += char;
    if (counter % n === 0) {
      result += "\n";
    }
  }
  return result;
}
console.log(findNstring(5, x) + "       this is the end");

const y = "hey' this is a new concat method im learning!";
const z =
  "Hello world, testing, one two three, are you there, this is major tom?";
console.log("Hello \t Wor''ld, im a tab");
console.log("Hello \n World, \n im a new line");

const concatProperty = x.concat(y, z);
console.log(concatProperty);
