//What is the highest grossing movie from Universal Pictures, domestically?import { readFileSync } from "fs";
import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";
const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim();
};

const topMovies = fileReader("./top_movies.csv");

//after parsing the data, first we want to filter the data for movies from universal Pictures
//then  we would want to sort the objs by highest to lowest - us sales, but inorder to use filter the object has to be turned
//into an array 2. and then return the [0] index.

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
function highestDomesticUniversal(data) {
  const filtered = data.filter(
    (item) => item.Distributor === "Universal Pictures"
  );

  filtered.sort((a, b) => b["US Sales"] - a["US Sales"]);

  return filtered[0].Title;
}

console.log(highestDomesticUniversal(parsedTopMovies));
