import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const babyNames = fileReader("./baby_names_2020_short.txt");

//find shortest name

// 1. result string. 2. counter. 3. for loop itereating over each babyname checking its length and if its shorter
// than the current holder of result string, update string. 4. return result

let result;

for (const babyName of babyNames) {
  if (babyName.length < result?.length || result === undefined) {
    result = babyName;
  }
}

console.log(result);

//using sort

function usingSort(arr) {
  const sortedArr = arr.sort((a, b) => a.length - b.length);

  return sortedArr[0];
}

console.log("result using sort:", usingSort(babyNames));

//using spread operator

function spreadOperatorUse(arr) {
  return [...arr].sort((a, b) => a.length - b.length)[0];
}

console.log("result using spread operator:", spreadOperatorUse(babyNames));

// using reduce

function usingReduce(arr) {
  return arr.reduce((acc, e) => {
    return e.length < acc.length ? e : acc;
  }, arr[0]);
}

console.log("result using reduce", usingReduce(babyNames));
