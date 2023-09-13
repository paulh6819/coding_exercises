import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const babyNames = fileReader("./baby_names_2020_short.txt");

const scrabbleWords = fileReader("./sowpods.txt");

const test1 = ["cAt", "PAT", "pick"];

const test2 = ["Tac", "tAP"];

// There is at least one baby name from the top 40 baby names for 2020 that,
//  when spelled backwards, is a valid Scrabble word. Find and print all such names.

//0. wrap in function 1. bringin scabblewords. 2. set up a for loop for babynames 3. reverse each baby name, and make upperCase and then iterate the reveresed baby name in
// a secondary forloop that interates over the scabble words and cheks to see if they are equivlant. 4. returns to a result array
// if there is a positive match

function nameCheck(babyNames, scrabbleWords) {
  const result = [];

  for (const babyName of babyNames) {
    const reveresedName = babyName.toUpperCase().split("").reverse().join("");
    console.log(reveresedName);

    for (const word of scrabbleWords) {
      const upperCaseWord = word.toUpperCase();
      if (reveresedName === upperCaseWord) {
        result.push(babyName);
      }
    }
  }
  return result;
}

console.log(nameCheck(babyNames, scrabbleWords));

//check the timing in node ja (look up)
// be mindful of running my function
// remember that i can run code snippets in REPL <---- look into
// make sure to think hard about the phislophy of debuggin, remember that practice is essential here
// looking into how to use the dev tools (it will pay off)


//This is the second way the instructions say to solve the problem

function solvingUsingDictionary(babyNames, scrabbleWords){
 
        const mappedNames = 
}




//Additional solves using strategies from previous pairing sessions

function usingForEachAndFilter(babyNames, scrabbleWords) {
  const scrabbleset = new Set();

  scrabbleWords.forEach((word) => scrabbleset.add(word.toUpperCase()));

  return babyNames.filter((babyName) => {
    const reveresedBabyName = babyName
      .toUpperCase()
      .split("")
      .reverse()
      .join("");

    return scrabbleset.has(reveresedBabyName);
  });
}

console.log(usingForEachAndFilter(babyNames, scrabbleWords));


