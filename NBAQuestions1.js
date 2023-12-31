import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const NBAData = fileReader("nba_finals.csv");

//console.log(NBAData);

//Write a function that takes as an argument a year and returns the winner of the NBA finals that year.

//1.console log the data and use it to try to visualize a solution 2. if we wrote a for loop we can access the year
// as the zero index because they're all in order, becuase we can split each entrey and make a new array. and then we need to make another forloop to loop over our split
//3. since the winner is the [1]index if the 0 index of the year,
// matched the input year of the function, we know to return the next i.

function yearOfWinner(year) {
  for (let item of NBAData) {
    const splitItem = item.split(",");

    if (parseInt(splitItem[0], 10) === year) {
      return splitItem[1];
    }
  }
}

console.log(yearOfWinner(2018));

//work more with parseINt
//not specifying the base with parseInt can lead javascript to misintrepret the base and cause security problems.

//HomeWork make CSV parser in this format: from : [
// "Year,Winner,Loser,Score,MVP",
// "2019,Toronto Raptors,Golden State Warriors,3-2,Kawhi Leonard",
// "2018,Golden State Warriors,Cleveland Cavaliers,4-0,Kevin Durant",
// "2017,Golden State Warriors,Cleveland Cavaliers,4-1,Kevin Durant"
//]

//to:[
//     {
//         "Year": "2019",
//         "Winner": "Toronto Raptors",
//         "Loser": "Golden State Warriors",
//         "Score": "3-2",
//         "MVP": "Kawhi Leonard"
//     },
//     {
//         "Year": "2018",
//         "Winner": "Golden State Warriors",
//         "Loser": "Cleveland Cavaliers",
//         "Score": "4-0",
//         "MVP": "Kevin Durant"
//     },
//     {
//         "Year": "2017",
//         "Winner": "Golden State Warriors",
//         "Loser": "Cleveland Cavaliers",
//         "Score": "4-1",
//         "MVP": "Kevin Durant"
//     }
// ]
