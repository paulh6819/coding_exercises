import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const NBAData = fileReader("nba_finals.csv");

console.log(NBAData);
