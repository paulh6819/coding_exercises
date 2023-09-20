import { readParseCSV } from "./CSVParser.js";

const billBoardData = readParseCSV("billboard100_2000.csv");

//
// [ ] Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week, only print it once. Example output:
// These were the number one songs of 2000:
// "Try Again" - Aaliyah
// "Say My Name" - Destiny's Child

//1. The input is the billboard data, the out put of my function will be all the number one songs and the artist - an array of strings.
//2.first i would use filter to figure the songs that are number on. 3. use set to make sure the artist is and then map to give me an array of the artits and songs.

function numberOneSongs(data) {
  let numberOne = data
    .filter((item) => parseInt(item.rank) === 1)
    .map((element) => {
      return `"${element["artist"]}"- ${element["song"]}`;
    });

  return new Set(numberOne);
}
for (let str of numberOneSongs(billBoardData)) {
  console.log(str);
}

// function numberOneSongs(data) {
//     let numberOne = data.filter((item) => parseInt(item.rank) === 1);

//     let setSongs = new Set(numberOne);
//     console.log(setSongs);
//   }
//   numberOneSongs(billBoardData);
