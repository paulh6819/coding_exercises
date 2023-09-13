//What are all of the names that were top 40 baby names in both 1880 and 2020?

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const babyNames_2020 = fileReader("./baby_names_2020_short.txt");

const babyNames_1880 = fileReader("./baby_names_1880_short.txt");

//1. filters one list agsint the other. In our filter function have it return true if the second contains the babyname
// from the first list we use the includes method on babyname2 tos ee if it includes babyname from the first arry
// return the new filtered array

function inBothLists(arr1, arr2) {
  return arr1.filter((babyname) => arr2.includes(babyname));
}

console.log(inBothLists(babyNames_1880, babyNames_2020));

//solving using set and spread operator --- this creates a fresh problem, i dont think this is the right way to go about it

const solvedUsingSet = new Set(babyNames_1880.concat(babyNames_2020));

console.log("solved using set:", solvedUsingSet);

//notes - not all arguments need to be inlcuded

//implment a solution using set for this. A set could perhaps be even faster.
//do again with a forloop just for practice.
//get comfortable using
//learn how to use breakpoint in dev tools

function namesInBothForLoop(arr1, arr2) {
  const result = [];

  for (const name1 of arr1) {
    for (const name2 of arr2) {
      if (name1 === name2) {
        result.push(name1);
      }
    }
  }
  return result;
}

console.log(
  "solved using forLoop,",
  namesInBothForLoop(babyNames_1880, babyNames_2020)
);

function solveUingForEach(arr1, arr2) {
  const resultArry = [];
  arr1.forEach((name1) => {
    if (arr2.includes(name1)) {
      resultArry.push(name1);
    }
  });
  return resultArry;
}

console.log(
  solveUingForEach("solved using foreach", babyNames_1880, babyNames_2020)
);
