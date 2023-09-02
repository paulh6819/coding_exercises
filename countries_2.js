import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("./countries.txt");

//countries that begin and end with a vowel

// empty result array, forloop, make a vowel array, check 0 index and  .length -1 index against array

let result = [];

for (let name of countries) {
  let nameUpperCase = name.toUpperCase();

  let vowelsArray = ["A", "E", "I", "O", "U"];

  if (
    vowelsArray.includes(nameUpperCase[0]) &&
    vowelsArray.includes(nameUpperCase[name.length - 1])
  ) {
    result.push(name);
  }
}

console.log(result);

function useFilter(arr) {
  return arr.filter((country) => {
    const vowels = ["A", "E", "I", "O", "U"];
    const upperCaseCountry = country.toUpperCase();
    return (
      vowels.includes(upperCaseCountry[0]) &&
      vowels.includes(upperCaseCountry[upperCaseCountry.length - 1])
    );
  });
}

console.log("result useing filter", useFilter(countries));
