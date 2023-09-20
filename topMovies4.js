import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";
const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim();
};

const topMovies = fileReader("./top_movies.csv");

// const input = `
// "key_1","key_2"
// "value 1","value 2"
// `;
// const records = parse(input, {
//   columns: true,
//   skip_empty_lines: true,
// });
// assert.deepStrictEqual(records, [{ key_1: "value 1", key_2: "value 2" }]);

// return a dictonary of all the ratings

const parsedTopMovies = parse(topMovies, {
  columns: true,
  skip_empty_lines: true,
});

//What is the earliest year on this list, and what were the films from that year?

function earliestMovie(data) {
  let newData = data.sort(
    (a, b) => Number(a["Release Date"]) - Number(b["Release Date"])
  );

  let mappedData = newData
    .filter((item) => {
      return (
        Number(item["Release Date"]) === Number(newData[0]["Release Date"])
      );
    })
    .map((item) => `${item["Title"]} in the year ${item["Release Date"]}`)[0];
  return mappedData;
}

console.log(earliestMovie(parsedTopMovies));
