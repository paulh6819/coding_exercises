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

//try to optimise and cut down how many things to check - homework

//empty arrays can take up space in memory

console.time("answer time");
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

console.timeLog("answer time");

console.time("answer time filter:");

//version two

const filteredTest = countries.filter((country) => {
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
    return true;
  } else {
    return false;
  }
});

console.log(filteredTest);

console.timeLog("answer time filter:");

//version three --- eliminated for loop, speed increases, but interestingly, the top part of its range can exceed the lower range of the code above

console.time("answer time three Elimination of forlop:");

const testThree = countries.filter((country) => {
  const upperCaseCountry = country.toUpperCase();
  const vowelDictionary = { A: 0, E: 0, I: 0, O: 0, U: 0 };

  for (const char of upperCaseCountry) {
    if (vowelDictionary[char] !== undefined) {
      vowelDictionary[char] = 1;
    }
  }

  if (
    vowelDictionary["A"] +
      vowelDictionary["U"] +
      vowelDictionary["I"] +
      vowelDictionary["O"] +
      vowelDictionary["E"] <
    2
  ) {
    return true;
  } else {
    return false;
  }
});

console.log(testThree);

console.timeLog("answer time three Elimination of forlop:");

console.time("answer time test of set:");
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
console.timeLog("answer time test of set:");
//below is the fastest yet

console.time("answer time test of indexOF:");
const testUsingIndexOf = countries.filter((country) => {
  const upperCaseCountry = country.toUpperCase();
  const vowels = ["A", "E", "I", "U", "O"];
  let vowelCount = 0;
  for (const char of vowels) {
    if (upperCaseCountry.indexOf(char) !== -1) {
      vowelCount += 1;
    }
  }
  return vowelCount === 1;
});

console.log("testing using indexOf", testUsingIndexOf);
console.timeLog("answer time test of indexOF:");
