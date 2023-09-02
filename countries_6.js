import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("./countries.txt");

//There is at least one country name that contains another country name. Find all of these cases.

// start with my result array 2. then create a forloop that turns every country name into uppercase, to be checked agaisnt another forloop
// to see if that country's name is included in any other country, in other words iterate over the original countries array twice
// and push any countries to the result array with an if statement, then return the result array as a set inorder to prevent duplicates

const result = [];

for (const country of countries) {
  const upperCaseCountry = country.toUpperCase();

  for (const country2 of countries) {
    const upperCaseCountry2 = country2.toUpperCase();
    if (
      upperCaseCountry.includes(upperCaseCountry2) &&
      upperCaseCountry !== upperCaseCountry2
    ) {
      // console.log(upperCaseCountry2);
      result.push(upperCaseCountry);
    }
  }
}

const setResult = new Set(result);

console.log(setResult);

function usingFilterToFindCountry(arr) {
  return arr.filter((country, arr) => {
    const upperCaseCountry = country.toUpperCase();
    for (const i of arr) {
      if (i.toUpperCase === upperCaseCountry) {
        return country;
      }
    }
  });
}
console.log("using filter:", usingFilterToFindCountry(countries));
