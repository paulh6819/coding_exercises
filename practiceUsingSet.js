import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("./countries.txt");

const testSet = countries.filter((country) => {
  const upperCaseCountry = country.toUpperCase();
  const setOfVowels = new Set(["A", "E", "I", "U", "O"]);
  const countryVowels = new Set();

  for (const char of upperCaseCountry) {
    if (setOfVowels.has(char)) {
      countryVowels.add(char);
    }
  }

  if (countryVowels.size === 1) {
    return true;
  } else {
    return false;
  }
});
console.log("results for set", testSet);
