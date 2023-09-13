// Write a function that takes as

// Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.

import { readParseCSV } from "./CSVParser.js";

const NBAData = readParseCSV("nba_finals.csv");

console.log(NBAData);

//looking into more imports and exports
function yearsWon(parsedData, teamName) {
  let result = [];

  parsedData.forEach((obj) => {
    if (obj.Winner === teamName) {
      result.push(obj.Year);
    }
  });
  return result;
}
console.log(yearsWon(NBAData, "Minneapolis Lakers"));

//after solving this anyway I can, see how I woulduse reduce or any other mehods
function yearsWon2(parsedData, teamName) {
  return parsedData.reduce((acc, obj) => {
    if (obj.Winner === teamName) {
      acc.push(obj.Year);
    }
    return acc;
  }, []);
}
console.log(yearsWon2(NBAData, "Boston Celtics"));

//solve using map

function yearsWon3(parsedData, teamName) {
  return parsedData
    .filter((obj) => obj.Winner === teamName)
    .map((obj) => obj.Year);
}

console.log(yearsWon3(NBAData, "Golden State Warriors"));
