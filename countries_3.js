import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const countries = fileReader("./countries.txt");

//countries names with more than 50% vowels

//1. result array , for loop , have an array holding vowels, ccheck each char against vowels and have two counters, one for consonants and
// one for vowels and if the vowel counter is bigger, push name to result array

let result = [];

for (const country of countries) {
  let upperCaseCountry = country.toUpperCase();

  let vowelsArray = ["A", "I", "O", "U", "E"];

  let vowelCounter = 0;

  for (const char of upperCaseCountry) {
    if (vowelsArray.includes(char)) {
      vowelCounter += 1;
    }
  }
  if (vowelCounter > country.length / 2) {
    result.push(country);
  }
}

console.log(result);

const numArray = [8, 9, 302, 5, 4, 2342, 5, 6, 7, 3, 7, 8, 1, 10, 49];

const filteredNum = numArray.filter((num, i, arr) => num > arr[1]);

console.log(filteredNum);
