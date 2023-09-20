import { readParseCSV } from "./CSVParser.js";

const billBoardData = readParseCSV("billboard100_2000.csv");

//What song was the #1 song for the most weeks of 2000, who was the artist, and how many weeks was it at #1?

//1. input: arry object - the billboardData. output: an arist and week count, and which song. 2. use the reduce function to create
// a dictionary of songs, that accumluates the number of times each song ranked number one. 3. we can then find
// the arist that its connected to and we already have the number

function songRankingAt1Weeks(data) {
  const result = data.reduce((acc, obj) => {
    if (obj.date.slice(0, 4) !== "2000") {
      //throw new Error("invalid input" + " " + JSON.stringify(obj));
    }
    if (obj.rank === "1") {
      if (!acc[obj["song"]]) {
        acc[obj["song"]] = 1;
      } else {
        acc[obj["song"]] += 1;
      }
    }
    return acc;
  }, {});
  return Object.entries(result)
    .sort((a, b) => b[1] - a[1])[0]
    .toString();
}∏
console.log(songRankingAt1Weeks(billBoardData));
