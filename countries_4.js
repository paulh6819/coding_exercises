import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("./countries.txt");

// Shorest name, can handle ties
// 1. have an array that will have all the shortest countries 23. for loop that iterates over the list of countries,
// checks to see if the country being iterated over is equal to or less than the current country being held in the shortcountry
//array, checks the zero index 3. if the country character length is less then it replaces the entire array containing just that country,
// it equals that countrys length, then it gets pushed to the array 4. if empty have it upated with the current country

// let shortCountries = [];

// for (const country of countries) {
//   if (
//     shortCountries.length === 0 ||
//     country.length < shortCountries[0].length
//   ) {
//     shortCountries = [country];
//   } else if (country.length === shortCountries[0].length) {
//     shortCountries.push(country);
//   }
// }

// console.log(shortCountries);

let shortCountries = [];
for (const country of countries) {
  if (
    shortCountries.length === 0 ||
    country.length === shortCountries[0].length
  ) {
    shortCountries.push(country);
  } else if (country.length < shortCountries[0].length) {
    shortCountries = [country];
  }
}
console.log(shortCountries);
