import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";
const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim();
};

const topMovies = fileReader("./top_movies.csv");

//What distributor has the most films on this list?

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

console.log(parsedTopMovies);

function ratingsDistrubution(data) {
  let ratings = data.reduce((acc, item) => {
    if (!acc[item["Rating"]]) {
      acc[item["Rating"]] = 1;
    } else {
      acc[item["Rating"]] += 1;
    }
    return acc;
  }, {});
  return ratings;
}
console.log(ratingsDistrubution(parsedTopMovies));
