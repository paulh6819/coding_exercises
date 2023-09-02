import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const babyNames = fileReader("./baby_names_2020_short.txt");

// longest baby name, but itcan handle ties

// 1. declare an empty result string. 2. make a forloop that iterates over all the babynames and checks for length
// updates the result string with the current longest string. 3. reutrn the result string

const sortedBabyNames = [...babyNames].sort((a, b) => b.length - a.length);
console.log(sortedBabyNames);
const result = [];

// for (const babyName of sortedBabyNames) {
//   if (
//     result[0] === undefined ||
//     babyName.length === sortedBabyNames[0].length
//   ) {
//     result.push(babyName);
//   }
// }

sortedBabyNames.forEach((babyName, i, arr) => {
  if (result[0] === undefined || babyName.length === arr[0].length) {
    result.push(babyName);
  }
});

const filteredBabyNames = sortedBabyNames.filter(
  (babyName, i, arr) => babyName.length === arr[0].length
);

console.log(result);
console.log(filteredBabyNames);

//spread operator
//copying arrarys
// the pricple of array mutation
//filter method
//forEach method
// (look into shift and unshift) <---- working on this
// sorted method
//function signature <-----

//functional and object orientented langauge
