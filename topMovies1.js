//What movies on this list were distributed by DreamWorks?

import assert from "assert";
import { parse } from "csv-parse/sync";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim();
};

const topMovies = fileReader("./top_movies.csv");

console.log(topMovies);

// const input = `
// "key_1","key_2"
// "value 1","value 2"
// `;
// const records = parse(input, {
//   columns: true,
//   skip_empty_lines: true,
// });
// assert.deepStrictEqual(records, [{ key_1: "value 1", key_2: "value 2" }]);

const parsedTopMovies = parse(topMovies, {
  columns: true,
  skip_empty_lines: true,
});

console.log(parsedTopMovies);

//finsh the problem and review next week

//What movies on this list were distributed by DreamWorks?
function whichMoivesByDreamWorks(data) {
  return data.reduce((acc, item) => {
    if (item["Distributor"] === "DreamWorks") {
      acc.push(item["Title"]);
    }
    return acc;
  }, []);
}

console.log(whichMoivesByDreamWorks(parsedTopMovies));

//using filter and map

function usingFilterAndMapToDream(data) {
  return data
    .filter((item) => item.Distributor === "DreamWorks")
    .map((item) => item["Title"]);
}

console.log("using filter and map", usingFilterAndMapToDream(parsedTopMovies));
