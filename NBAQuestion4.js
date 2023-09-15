//Print out a ranking of who has won the MVP more than once, by times won, e.g. this output:

import { readParseCSV } from "./CSVParser.js";

const NBAData = readParseCSV("nba_finals.csv");

//1.console.log to visualize the data. 2. the output we want is the MVP and the quanity of times won, if they won more than once. And we want
//this ranked, by whos won the most(rank by sorting). We will have to make a dictionary, and have as a value  the times won and as a key hte MVP
//3.make an empty object adn then a foreach those goes through the data, places hte MVP in its key, creating a key if one doesnt exist, adding
// to the value of the key if it does. 4. and then we can sort our dictionary and return the results. 5. {Micheal Jordan: 6, Kobe:3,joe:3} ,
//{6: Micheal Jordan , 3:[joe,Kobe]}

// function rankingMVPs(data) {
//   const obj = {};
//   data.forEach((unit) => {
//     if (obj[unit.MVP] === undefined) {
//       obj[unit.MVP] = 1;
//     } else {
//       obj[unit.MVP] += 1;
//     }
//   });
//   console.log(obj);
// }

// rankingMVPs(NBAData);

function rankingMVPs(data) {
  const obj = {};
  data.forEach((unit) => {
    if (obj[unit.MVP] === undefined) {
      obj[unit.MVP] = 1;
    } else {
      obj[unit.MVP] += 1;
    }
  });

  const resultObj = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (resultObj[value] === undefined) {
      resultObj[value] = key;
    } else {
      resultObj[value] += key + " ";
    }
  });
  return Object.entries(resultObj).sort((a, b) => b[0] - a[0]);
}

console.log(rankingMVPs(NBAData));
