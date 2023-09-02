import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("./countries.txt");

// 1.Array 2. forloop, that will look for united, and place all the countries with united in the  empty array

let result = [];

for (let name of countries) {
  let upperCaseName = name.toUpperCase();

  if (upperCaseName.includes("UNITED")) {
    result.push(name);
  }
}

console.log(result);

function returnsUnited(arr) {
  return arr.filter((countries) => countries.toUpperCase().includes("UNITED"));
}

console.log(returnsUnited(countries));
