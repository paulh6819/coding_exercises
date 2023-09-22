import { readParseCSV } from "./CSVParser.js";

const billBoardData = readParseCSV("billboard100_2000.csv");

//What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?

//1. input is billboard data and output songs on the chart 27 weeks or more. 2. use reduce to make a new object that has each song as its key and
// a count for each song as its value which accumlates. 3. i would convert the object to an array and filter out each song that has under 27 as a value

function mostOfYearOnCharts(data, weeks = 26) {
  return new Set(
    data
      .filter((obj) => Number(obj["weeks-on-board"]) > weeks)
      .map((filtered) => filtered.song)
  );
}
console.log(mostOfYearOnCharts(billBoardData, 1));
