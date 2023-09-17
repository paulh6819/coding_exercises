import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";
const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim();
};

const topMovies = fileReader("./top_movies.csv");

//What distributor has the most films on this list?
//input for function - movie data, output - a single distributor.
//1. make an emprt results obj (dictionary) 2. use a forEach to iterate over each object in our data and place into the
//resultsObject  a key for every distrubutor as the distrubitor comes up and then accumlates a value for each time the distrubutor is seen.
// 3. final step is to sort the resultObj and return the 0 index.

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

function topDistributor(data) {
  const resultObj = {};
  data.forEach((item) => {
    if (!resultObj[item.Distributor]) {
      resultObj[item.Distributor] = 1;
    } else {
      resultObj[item.Distributor] += 1;
    }
  });
  const sortedResult = Object.entries(resultObj).sort((a, b) => b[1] - a[1]);
  return sortedResult[0][0];
}

console.log(topDistributor(parsedTopMovies));

//using reduce

function usingReduce(data) {
  const reducedData = data.reduce((acc, item) => {
    if (item.Distributor) {
      acc[item.Distributor] = (acc[item.Distributor] || 0) + 1;
    }
    return acc;
  }, {});
  return Object.entries(reducedData).sort((a, b) => b[1] - a[1])[0];
}

console.log(usingReduce(parsedTopMovies));
