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

//one major take away fro thie lesson is merely pushing to an arry when your intent is to filter an array is superflous, and the goal
// is to create readable, beautiful code that also reduces cognigitve load so you can code longer, and more effectively.
// methods like filter, which i actully thought were needlessly complex, present a useful layer of abstraction. And here
// another self generated take away: while consciouly abstarting certain things can present a steeper leanring curve to begin with,
// in the long run the reduction of cognitive load is well worth it. But there is one hole in this theory of mine: python has abstarted
// much away and the learning curve is lower than a languge like C++ which inturn abstracts much of machine code. So at a certain
// level abstartion becomes difficult, and I would imagine that absrtation not only lessons control, but becuase impossible to
// understant of use.
