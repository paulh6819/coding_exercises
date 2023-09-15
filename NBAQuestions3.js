//Which teams have made it to the NBA finals but have never won?

import { readParseCSV } from "./CSVParser.js";

const NBAData = readParseCSV("nba_finals.csv");

console.log(NBAData);

//1. for input we have our NBA data, for output teams that meet the two conditons of having lost but never won but never having won.
//2. start with a funciton that takes two arguments, the first being parsed data, the second being the team that we are testing the conditons for
//3. map out all the teams into an arry of winners 4. when check the data the second time check to see if the loser value matches
//any of the teams in the winner arry, and if they do return false. this will leave us with the result

function lostNeverWon(parsedData) {
  const mappedWinners = parsedData.map(
    (championshipData) => championshipData.Winner
  );
  return parsedData
    .filter(
      (championshipData) => !mappedWinners.includes(championshipData.Loser)
    )
    .map((filteredData) => filteredData.Loser);
}

console.log(lostNeverWon(NBAData));

// redo this using set, and regardless improve the speed someway for practice.
// look more into set theory
// should see the times on my previous questions
