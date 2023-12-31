//return a number count for "A" for a given word

//make a function that take one argument, a string. 2. use a foreach method on the string that iterates over the chaacters,
// counts the A's and returns an number

const test = "AAA";

function countTheAs(str) {
  let counter = 0;
  str.split("").forEach((char) => {
    if (char === "A") {
      counter += 1;
    }
  });
  return counter;
}

console.log(
  "using filter",
  countTheAsUsingFilter("THIS is A giant test to sea If i know Anything")
);
console.log(countTheAs(test));
console.assert(countTheAs(test) === 32, "expected A's to be three");

//homework - 1. use arrert
// 2. rewrite this with filter
// 3. what would be a very javascript way of solving this, with string, becuase im converting this to an arry, check M?
//4.

//using filter
function countTheAsUsingFilter(str) {
  return str.split("").filter((char) => char === "A").length;
}

//using string only methods, very javascript

function stringOnly(str) {
  return [...str].reduce((acc, char) => (char === "A" ? acc + 1 : acc), 0);
}

console.log("test using reduce", stringOnly(" SIX AAAAAA"));
