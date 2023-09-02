import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("./countries.txt");

// find the countrys with only one vowel type
// 0. array outside the loop that holds all the one vowel countrys - RESULTS
// 1. forloop to iterate of countries 2.make a placeholder dictionary , with keys of the vowels, the value will be the vowel count
// within this iteration or this particular country. 3. now that we have the vowels counted, we loop through the dictionary
// and see if 4 out of 5 values are zero. 4. then we return true from our second loop over the dictonary if it only has 1 vowel, and push to the result array
// return our result array 5. make every country uppercase to preclude case sesistivy

const result = [];

for (const country of countries) {
  const upperCaseCountry = country.toUpperCase();
  const vowelDictionary = { A: 0, E: 0, I: 0, O: 0, U: 0 };

  for (const char of upperCaseCountry) {
    if (vowelDictionary[char] !== undefined) {
      vowelDictionary[char] += 1;
    }
  }

  let vowelCounter = 0;

  for (const key in vowelDictionary) {
    if (vowelDictionary[key]) {
      vowelCounter += 1;
    }
  }

  if (vowelCounter === 1) {
    result.push(country);
  }
}

console.log(result);
