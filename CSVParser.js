//function that returns from an array o

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

// const NBAData = fileReader("nba_finals.csv");

// console.log(NBAData);

function parseCSV(lines) {
  const headers = lines[0].split(",");
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    const obj = {};
    for (let j = 0; j < values.length; j++) {
      obj[headers[j]] = values[j];
    }
    result.push(obj);
  }
  return result;
}

//to start a function think - whats the indented input, whats the intended output

export const readParseCSV = (filePath) => {
  const fileData = fileReader(filePath);
  return parseCSV(fileData);
};

//could also have a function that composes both function
