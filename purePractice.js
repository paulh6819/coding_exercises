//Questions - things to go over and practice
// 1. what is the differnce between a prototype method and a static method?

// 2. what is the call stack? How does it apply to you or how do you apply it? can we do anything quickly to demonstrate it?

// notes
// 1. when you use slice, the first number in the index of .slice(4) is inclusive and if you only use one number it will call the rest
// of the string
// 2. .some() brings back a boolean in relation to if even one of the items meets the constions, as opposed to filter that brings back each item
// into a new array if the conditions are met

//notes of things went over with mentors
//1. importing and exporting your own funcitons is a powerful way to organize your code for the sake of readibility
//and sectioning off chunks of thought. This is a big deal because coding for the developer (as opposed to
//the computer scientist or soemthing) if about delivering thoughts that are fairly straigtforward by themselves
// but become difficlut when chained together, in the sense that the idea of what they are together must be understood
// if your code is to progress

//2. this is really important ---> when attempting to create a new function, comment first above, what is supposed to come in, and what is
// the desired output. this really helps gather my thoughts

//3. we can put my CSV parser on NPM for dowloads!

// notes on tips for a tech interview
// 1. ask for claificaiton, at the least oportunity. practice rephrasing the question in my own words and saying it out loud back to the interviewer
// for confirmation. This could be good not only for clarifiy my own thoughts but sometimes interviewers are indeed looking for an atempt to communication
// about the probelm.

import { count } from "console";
import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

const baby_names_1880 = fileReader("baby_names_1880_short.txt");
const baby_names_2020 = fileReader("baby_names_2020_short.txt");

// What are all of the words that start with a Q, end with a Z, and are less than or equal to 6 letters long?

// function wordsThatstartWithQZ(words) {

//     let result = [];

//     for (let word of words) {

//         if (word[0] === "Q" && word[word.length - 1] === "Z" && word.length < 7) {
//             result.push(word)
//         }
//     }

//     return result
// }

// console.log(wordsThatstartWithQZ(scrabbleWords))

// Create and print an array containing all of the words that have only one kind of vowel in them.

function onlyOneTypeOfVowel(words) {
  let result = [];

  for (let word of words) {
    let vowelDictionary = { A: 0, E: 0, I: 0, O: 0, U: 0 };

    for (let char of word) {
      if (vowelDictionary[char] === 0) {
        vowelDictionary[char] += 1;
      }
    }

    let accum = 0;

    for (let vowel in vowelDictionary) {
      if (vowelDictionary[vowel] > 0) {
        accum += 1;
      }

      if (accum === 1) {
        result.push(word);
      }
    }
  }
  return result;
}

console.log(onlyOneTypeOfVowel(scrabbleWords));

// Question 1:
//You have an array of numbers: [34, 12, 5, 78, 43, 11, 90]. Write a JavaScript function that sorts this array in descending order.

const arrayToSort = [34, 12, 5, 78, 43, 11, 90];

arrayToSort.sort((a, b) => b - a);

console.log(arrayToSort);

// Question 2:
// You have an array of strings representing dates in the format "DD-MM-YYYY": ["12-05-2020", "05-03-2019", "23-11-2021", "01-01-2018"].
//  Write a JavaScript function that sorts this array in ascending order based on the dates.

const datesArray = [
  "08-05-2020",
  "10-19-2021",
  "10-19-2023",
  "12-05-2020",
  "05-03-2019",
  "02-11-2021",
  "02-19-2021",
  "01-01-2018",
];

datesArray.sort((a, b) => {
  const sortedDates1 = Number(a.slice(6, 10)) - Number(b.slice(6, 10));
  if (sortedDates1 !== 0) return sortedDates1;

  const sortedDates2 = Number(a.slice(3, 5)) - Number(b.slice(3, 5));

  if (sortedDates2 !== 0) return sortedDates2;

  const sortedDates3 = Number(a.slice(3, 5)) - Number(b.slice(3, 5));
  return sortedDates3;
});

console.log(datesArray);

/// find three sums that add up to zero

function threeSum(arr) {
  arr.sort((a, b) => a - b);

  let numsAddUpToZero = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let numSum = arr[left] + arr[right] + arr[i];
      if (numSum === 0) {
        numsAddUpToZero.push([arr[left], arr[right], arr[i]]);
        console.log("true");
      }
      if (numSum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return numsAddUpToZero;
}

console.log(threeSum([4, 5, 6, -6, 2, -11, -9, 394, 3, 1000000, -34394934]));

// Certainly! Let's simplify things and focus on a two-pointer approach to find pairs in an array that sum up to a given target.

// Problem:
// Given a sorted array and a target sum, find all unique pairs in the array that sum up to the target.

// Approach:
// Initialize two pointers: left at the beginning of the array and right at the end.
// Calculate the sum of the elements at the left and right pointers.
// If the sum is equal to the target, add the pair to the result.
// If the sum is less than the target, move the left pointer to the right.
// If the sum is greater than the target, move the right pointer to the left.
// Continue until the left pointer is less than the right pointer.
// Task for you: Can you write a function that implements this two-pointer approach to find pairs in a sorted array that sum up to a given target?

function sumAddsUpToNum(arr, num) {
  arr.sort((a, b) => a - b);
  let result = [];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === num) {
      result.push([arr[left], arr[right]]);
    }

    while (arr[left] === arr[left + 1]) {
      left++;
    }

    while (arr[right] === arr[right - 1]) {
      right--;
    }

    if (arr[left] + arr[right] < num) {
      left++;
    } else {
      right--;
    }
  }
  return result;
}

console.log(
  sumAddsUpToNum([1, 3, 5, 2, 4, 1, -1, -2, -3, 0, 6, 2, 3, 3, -1, -4, 7], 4)
);

// Problem: Three Sum
// Given an array of integers, find all unique triplets in the array which gives the sum of zero.
// Note:
// The solution set must not contain duplicate triplets.

function letterCount(str) {
  const charCount = {};

  str
    .toUpperCase()
    .split("")
    .forEach((char) => {
      if (charCount[char]) {
        charCount[char] += 1;
      } else {
        charCount[char] = 1;
      }
    });

  const sortedChars = Object.entries(charCount).sort((a, b) => b[1] - a[1]);

  const sortedDictionary = {};

  sortedChars.forEach(([key, value]) => {
    sortedDictionary[key] = value;
  });
  return sortedDictionary;
}

console.log(
  letterCount("this is a string where i am Counting all the letters Thank you")
);

//constructor problem
function bankAccount(deposit, withdrawl) {
  this.deposit;
  this.withdrawl;
}

const filteredBabynamesBothLists = baby_names_1880.filter((babynames1) =>
  baby_names_2020.includes(babynames1)
);

console.log(filteredBabynamesBothLists);

//apple has create ML - (check it out)

function toWeirdCase(string) {
  //split string
  const splitString = string.split(" ");
  const correctedWords = [];
  for (let word of splitString) {
    let newWord = [];

    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        newWord.push(word[i].toUpperCase());
      } else if (i % 2 === 1) {
        newWord.push(word[i]);
      }
    }

    // for (let char of word) {
    //   if (word.indexOf(char) % 2 === 0) {
    //     newWord.push(char.toUpperCase());
    //   } else if (word.indexOf(char) % 2 !== 0) {
    //     newWord.push(char);
    //   }
    // }
    correctedWords.push(newWord.join(""));
  }
  return correctedWords.join(" ");
}

console.log(toWeirdCase("hey how are you doing good?"));

function greet(language) {
  const dataBase = [
    ["english", "Welcome"],
    ["czech", "Vitejte"],
    ["danish", "Velkomst"],
    ["dutch", "Welkom"],
    ["estonian", "Tere tulemast"],
    ["finnish", "Tervetuloa"],
    ["flemish", "Welgekomen"],
    ["french", "Bienvenue"],
    ["german", "Willkommen"],
    ["irish", "Failte"],
    ["italian", "Benvenuto"],
    ["latvian", "Gaidits"],
    ["lithuanian", "Laukiamas"],
    ["polish", "Witamy"],
    ["spanish", "Bienvenido"],
    ["swedish", "Valkommen"],
    ["welsh", "Croeso"],
  ];

  const resultA = dataBase.filter((pair) => pair[0] === language)[0];
  resultA.shift();
  return resultA[0];
}

// console.log(greet("english"));

// function reverseMessage(str) {
//   let str2 = str.toLowerCase();

//   let reversedStr = str2.split("").reverse();

//   const shiftedStr = reversedStr.shift().toUpperCase();
//   const poppedStr = reversedStr.pop().toLowerCase();
//   //const unshiftedStr =  reversedStr.shift(shiftedStr.toUpperCase())shiftedStr.toUpperCase()

//   let allMostDone =
//     shiftedStr + reversedStr.join("") + poppedStr.split("").join("");

//   let resultStr = "";

//   for (let i = 0; i < allMostDone.length; i++) {
//     if (allMostDone[i] === " ") {
//       resultStr += allMostDone[i] + allMostDone[i + 1].toUpperCase();
//       i++;
//     } else {
//       resultStr += allMostDone[i];
// //     }
//   }

//   return resultStr;
// }
// function compoundWords(arr) {
//   return arr.filter((word) => {
//     for (let smallerWord of arr) {
//       for (let smallerWord2 of arr) {
//         if (word === smallerWord + smallerWord2) {
//           return word;
//         }
//       }
//     }
//   });
// }
// console.log("is this working", compoundWords(scrabbleWords));

// console.log(reverseMessage("Today is the 14th of January!"));

// if ("!yraunaj Fo Ht41 Eht Si Yadot" === "!yraunaj Fo Ht41 Eht Si Yadot") {
//   console.log("code wars editor sucks");
// }

// Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.

// The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

// go through the orgininal word problems and solve using higher order functions

//What is the longest word where no letter is used more than once?

function longestWordNoDups(arr) {
  return arr
    .filter((word) => new Set(word.split("")).size === word.length)
    .sort((a, b) => b.length - a.length)[0];
}
console.log(longestWordNoDups(scrabbleWords));

function usesAtLeastThreeLetters(arr) {
  return arr.filter((word) => new Set(word.split("")).size < 4);
}

console.log(usesAtLeastThreeLetters(scrabbleWords));

// DO THIS BELOW

// Goal: solve this problem in < 30 minutes.

// Write a function that takes as input two arguments:

// 1. An array of numbers
// 2. An integer `k`

// and returns an array with all of the pairs of numbers from that array that sum to `k`. You can’t use the same number twice. You can assume that there are no duplicate numbers in the array.

// Example

// - Input array: `[1, 9, 6, 3, 5, 4]`
// - `k`: 10
// - Result: `[[1, 9], [6, 4]]` // Note that `[5, 5]` is not in the solution

function returnKlargest(arr, k) {
  arr.sort((a, b) => b - a);
  return arr.slice(0, k);
}

console.log(returnKlargest([5, 16, 7, 9, -1, 4, 3, 11, 2], 3));

// Problem: Given a string, return the second half of the string. If the string length is odd, include the middle character.
const test1 = "food";
const test2 = "chester";
function return2ndHalf(string) {
  const halfOfLength = string.length / 2;
  if (string.length % 2 === 0) {
    return string.slice(halfOfLength);
  } else {
    return string.slice(Math.floor(halfOfLength));
  }
}
console.log(return2ndHalf(test2));

const test3 = "xxxi";
function determineFirstIsLast(string, char) {
  return string.indexOf(char) === string.lastIndexOf(char);
}

console.log(determineFirstIsLast(test3, "i"));

function reversingWordOrder(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reversingWordOrder("This is a sentence that I'm making"));

//remove index of k

//starts and ends with y

function startsWithendsWithY(arr) {
  return arr.filter((word) => word.startsWith("Y") && word.endsWith("Y"));
}

console.log(startsWithendsWithY(scrabbleWords));

const startsEndsShort = (arr) =>
  arr.filter((word) => word.startsWith("Y") && word.endsWith("Y"));

console.log("this is the second shortest", startsEndsShort(scrabbleWords));

function longestPalindrome(arr) {
  return arr
    .filter((word) => word.split("").reverse().join("") === word)
    .sort((a, b) => b.length - a.length)[0];
}

console.log(longestPalindrome(scrabbleWords));

function leastCommonXZQ(arr) {
  const letterCounter = {
    Z: 0,
    Q: 0,
    X: 0,
  };
  arr
    .join()
    .split("")
    .forEach((char) => {
      if (letterCounter[char] !== undefined) letterCounter[char] += 1;
    });
  return Object.keys(letterCounter).reduce((a, b) =>
    letterCounter[a] > letterCounter[b] ? a : b
  );
}
console.log(leastCommonXZQ(scrabbleWords));

//redo this one

function nameInStr(str, name) {
  let letterCount = 0;
  name = name.toLowerCase();
  for (let i = 0; i < name.length; i++) {
    console.log("this is the letter count", letterCount);
    let newStr = str.toLowerCase();
    console.log(newStr);
    let nameChar = name[i];
    console.log(name[i]);
    let strIndex = newStr.indexOf(nameChar);
    console.log(strIndex);
    if (strIndex !== -1 && strIndex < newStr.indexOf(name[i + 1])) {
      letterCount += 1;
    }
    str = str.slice(strIndex);
  }
  return letterCount;
}

console.log(nameInStr("Across the rivers", "chris"));

//  do this problem too from leetcode
//  /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var subarraySum = function(nums, k) {
//     let results = []
//     for(let i = 0; i < nums.length ; i++){
//         let sum = 0;
//         let subArray = [nums[i]];
//         if(subArray === k){
//             results.push(subArray);
//             continue
//         }
//         for(let j = i + 1; j < nums.length; j++){
//            sum = nums[i] + nums[j];
//            if(sum > k){
//                 break
//             }else if( sum < k ){
//                sum+= nums[j + 1]
//             }else if ()
//         }
//     }
// };

// //make sure to push subarrray to results if conditions are met

// //the answer/**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var subarraySum = function(nums, k) {
//     let count = 0; // This will store the number of subarrays that sum up to k

//     for(let i = 0; i < nums.length; i++) {
//         let sum = 0; // Reset sum for every new starting point

//         for(let j = i; j < nums.length; j++) {
//             sum += nums[j]; // Add current number to sum

//             if(sum === k) {
//                 count++; // If sum matches k, increase the count
//             }
//         }
//     }

//     return count;
// };

//Next, is “ABCDEF” the longest alphabet chain that can be found in a word, or is there a longer chain starting somewhere else in the alphabet? Find the
// longest chain and the words that can be made from that chain.

// start with problem above

function getYearsWon(team) {}

//practice using map

function squareTheNumbers(arr) {
  return arr.map((num) => num * num);
}

console.log(squareTheNumbers([1, 2, 3, 4]));

const userArry = [
  { id: 1, username: "Alice", email: "alice@example.com" },
  { id: 2, username: "Bob", email: "bob@example.com" },
];

function usersMap(obj) {
  return obj.map((user) => user.username);
}

console.log(usersMap(userArry));

//using .some()

const smallNumArr = [1, 2, 3, 4, -5];

const hasNegitive = smallNumArr.some((num) => num < 0);

console.log(hasNegitive);

//using .flat() and .some() together. Check and see if there is 5

const data = [1, 2, [3, 4, [5, 6, 7], 8], 9];
const isThereFive = data.flat(Infinity).some((num) => num === 5);
console.log(isThereFive);

//capiliize names with .map()
const namesToCap = ["alice", "bob", "charlie", "paul", "tiffany"];

const cappedNames = namesToCap.map((name) => {
  const splitName = name.split("");
  splitName[0] = splitName[0].toUpperCase();
  return splitName.join("");
});
// a more succint names to cap using map
const cappedNames2 = namesToCap.map((name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
});

console.log(cappedNames2);

//more map practice:

//Format Prices:
// Given an array of product prices (as numbers), return a new array where each price is formatted as a string with a dollar sign in front and rounded to two decimal places.
// Example Input: [9.9, 10, 1.23]
// Expected Output: ["$9.90", "$10.00", "$1.23"]
// Length of Words:
// Given an array of words, return a new array where each element is the length of the corresponding word from the original array.
// Example Input: ["apple", "banana", "cherry"]
// Expected Output: [5, 6, 6]

//write a function that mapped a doubled number

function doubleNum(arr) {
  return arr.map((num) => num * 2);
}

console.log(doubleNum(smallNumArr));

//Given an array of numbers, use Math.max to find the maximum value in the array.
function findMax(nums) {
  return Math.max(...nums);
}
console.log(findMax(smallNumArr));

//turn an array of floating points into an array on numbers rounded down

const floats = [5.6, 8.9, 2.1, 9.5, 7.7];

function downFloats(arr) {
  let floored = arr.map((num) => Math.floor(num));
  let cieled = arr.map((num) => Math.ceil(num));
  return [floored, cieled];
}
console.log(downFloats(floats));

function bigInts(str) {
  const numberArray = [];
  let accNum = [];

  for (let item of str) {
    if (Number.isInteger(Number(item)) === true) {
      accNum.push(item);
    } else {
      if (accNum.length > 0) {
        numberArray.push(accNum);
        accNum = [];
      }
    }
  }
  numberArray.push(accNum);

  return numberArray
    .map((arr) => Number(arr.join("")))
    .sort((a, b) => b - a)[0];
}

console.log(bigInts("gh12cdy6925m118983"));

// Of course! Here are some progressively challenging problems that deal with string manipulation, similar to the one you've just tackled:

// Reverse Words in a String:
// Write a function that takes a string as an argument and returns the string with each word reversed but maintains their original order.

const srtTest = "hey this is a string";

function eachWordReversed(strTest) {
  return strTest
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
}
console.log(eachWordReversed(srtTest));

// Compress String:
// Write a function that performs basic string compression using counts of repeated characters. If the compressed string is longer than the original string, return the original string.
// javascript
// Copy code
// compressString("aabcccccaaa"); // returns "a2b1c5a3"
// compressString("abcdef"); // returns "abcdef" (since compression would be "a1b1c1d1e1f1" which is longer)

function compressString(str) {
  let compressedSTR;
}

// Balanced Parentheses:
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:
// Open brackets are closed by the same type of brackets.
// Open brackets are closed in the correct order.
// Note that an empty string is also considered valid.
// javascript
// Copy code
// isValid("()"); // returns true
// isValid("()[]{}"); // returns true
// isValid("(]"); // returns false
// isValid("([)]"); // returns false
// Find First Non-Repeating Character:
// Write a function that takes a string and returns the first character that doesn't repeat anywhere in the string. If all characters are repeating, return null.
// For "success", the function should return "u".
// For "aabbcc", the function should return null.
// Maximum Substring of Digits:
// Given a string, find the maximum number that can be formed by a contiguous substring. Return the maximum number.
// For "abc12345def67", the function should return 12345.
// For "abcd", the function should return null.

// Certainly! Here are some problems that specifically leverage Number(x) and Number.isInteger along with similar methods:

// Easy:
// Parse and Sum:
// Write a function that takes an array of strings and returns the sum of all array elements that can be converted to non-negative integers.
// javascript
// Copy code
// parseAndSum(["10", "20", "abc", "30a", "40"]); // returns 70
// Is It a Number?:
// Write a function that checks if a given string can be converted to a number (it can be an integer or a floating-point number).
// javascript
// Copy code
// isItNumber("1234"); // returns true
// isItNumber("123.45"); // returns true
// isItNumber("123.45.67"); // returns false
// Medium:
// Extract Integers:
// Given a string, extract all unique integers from it and return them as an array. Ignore floating point numbers.
// javascript
// Copy code
// extractIntegers("Hello123world45.67abc89"); // returns [123, 45, 89]
// Rounded Average:
// Write a function that takes an array of strings. Convert each string to a number, calculate the average, and then return the rounded average. If a string can't be converted to a number, ignore it.
// javascript
// Copy code
// roundedAverage(["10", "20.5", "abc", "30.7"]); // returns 21 (because the average is 20.7333... which rounds to 21)
// Floating Point Precision:
// Given an array of numbers in string format, convert them to numbers and sum them up. However, maintain precision up to only 2 decimal places without using any external libraries.
// javascript
// Copy code
// preciseSum(["10.3333", "20.5555", "30.6666"]); // returns 61.56

function firstNonRepeated(s) {
  for (let char of s) {
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeated("m7nnsdjfns;bmv"));

//using find to find first no repeats

function norepeatsFind(str) {
  return str
    .split("")
    .find((char) => str.indexOf(char) === str.lastIndexOf(char) || null);
}
console.log(norepeatsFind("s9lkdfhasdnfsdflkjasdfslkjp"));

function claculator(a, o, b) {
  switch (o) {
    case "+":
      return a + b;
    case "-":
      return a + b;
    case "*":
      return a * b;
    case "/":
      if (b !== 0) {
        return a / b;
      }
    default:
      return null;
  }
}

console.log(claculator(4, "p", 98));

const objA = { a: 10, b: 20, c: 30, g: 72 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3, g: 100 };

function combine(...args) {
  return args.reduce((acc, obj) => {
    for (let item in obj) {
      if (acc[item] === undefined) {
        acc[item] = obj[item];
      } else {
      }
      // console.log(item);
    }
    return acc;
  }, {});
}

console.log(combine(objA, objB, objC, objD));

const authorData = [
  {
    title: "A Journey",
    author: "Jane Doe",
    categories: ["Adventure", "Self-Help", "fiction", "N/A"],
  },
  {
    title: "Mystic Lands",
    author: "John Smith",
    categories: ["Fantasy", "sci-fi"],
  },
  { title: "Life's Turns", author: "Jane Doe", categories: ["Self-Help"] },
  {
    title: "A Magic World",
    author: "John Smith",
    categories: ["Fantasy", "Adventure", "sci-fi"],
  },
];

function authorSummery(data) {
  return data.reduce((acc, item) => {
    if (!acc[item["author"]]) {
      acc[item["author"]] = new Set(item["categories"]);
    } else {
      item["categories"].forEach((category) =>
        acc[item["author"]].add(category)
      );
    }
    return acc;
  }, {});
}

console.log(authorSummery(authorData));

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// const objC = { a: 5, d: 11, e: 8 }
// const objD = { c: 3 }

const objZ = { a: 12, Q: 10000 };

function combineb(...args) {
  return args.reduce((acc, arg) => {
    for (let item in arg) {
      if (!acc[item]) {
        acc[item] = arg[item];
        console.log("this is working");
      } else {
        acc[item] += arg[item];
        console.log("why is this not working");
      }
    }
    return acc;
  }, {});
}

console.log(combineb(objA, objB, objC, objZ));

let randomNum = 304958;

console.log(typeof randomNum.toString());

//Question: Create a JavaScript class named Person with properties name
//and age, and a method sayHello() that logs "Hello, my name is [name] and I am [age] years old." to the console.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let jhon = new Person("jhon", 34);

console.log(jhon.age);

console.log(isNaN("Hello World, it's me Paul"));

console.log(Array.isArray(["hello ", "world"]));

//Problem: Write a function that returns an array of powers of 2 up to a given number.

let exampleNum = 20;

function numsDatSquare(num) {
  const arrayOfNums = [];
  for (let i = 0; i <= num; i++) {
    arrayOfNums.push(i);
  }

  //resrtart this or figureout how to get this to work tomorrow

  return arrayOfNums.reduce((acc, item) => {
    acc = acc;
    if (acc < num) {
      var newAcc = item * item + acc;
    }
    if (acc < num) {
      return newAcc;
    }
    return acc;
  }, 0);
}
console.log("this is the numer square", numsDatSquare(exampleNum));

// return an array of numbers (that are a power of 2)
// for which the input "n" is the sum
const powers = (n) => {};

// using a trie

class TrieNode {
  constructor() {
    this.children;
    this.endOfWord = false;
  }
}

class SimpleTrie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isEndOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (const char of word) {
      node = node[char];
      if (!node) {
        return false;
      }
    }
    return Boolean(node.isEndOfWord);
  }
}

let paulsTrie = new SimpleTrie();
paulsTrie.insert("Henderson");
console.log("this is my tire: ", paulsTrie.search("Hen"));
console.log(
  "this is a test of is henderson in the trie:",
  paulsTrie.search("Henderson")
);
paulsTrie.insert("Hey");
console.log("looking for hey; ", paulsTrie.search("Hey"));

class Car {
  constructor(color) {
    this.color = color;
  }
  displayColor() {
    console.log(this.color);
  }
}

let redHonda = new Car("Red");
redHonda.displayColor();

//more practice with inheritance and classes
class House {
  constructor(size) {
    this.size = size;
  }
  provideSize() {
    console.log(this.size);
  }
}

let bigHouse = new House("Four stories!");

class Ranch extends House {
  constructor(size, color) {
    super(size);
    this.color = color;
  }
  displayColorAndSize() {
    console.log(`The color is ${this.color} and the size is ${this.size}`);
  }
}

let brownRanch = new Ranch("One story", "brown");
brownRanch.displayColorAndSize();
bigHouse.provideSize();

// practice with inderatance and super

class SportsCar extends Car {
  constructor(color, topSpeed) {
    super(color);
    this.topSpeed = topSpeed;
  }
  displayColorAndTopSpeed() {
    console.log(
      `The color for this car is ${this.color} and the top speed is ${this.topSpeed}`
    );
  }
}
let bluePorsche = new SportsCar("Blue", "The Speed of spring sunlight");
bluePorsche.displayColorAndTopSpeed();

class Tree {
  constructor(bark) {
    this.bark = bark;
  }
  displayBark() {
    console.log(this.bark);
  }
  #privteDisplayBark() {
    console.log(this.bark);
  }
}

let firTree = new Tree("rough");

firTree.displayBark();

function palindrome(num, s) {
  num = num - 1;
  let count = 0;
  const resultArr = [];
  while (count < s) {
    num += 1;
    if (
      num.toString().split("").reverse().join("") === num.toString() &&
      num > 9
    ) {
      count += 1;
      resultArr.push(num);
    }
  }
  return resultArr;
}
console.log(palindrome(101, 2));

//pratice with replace and replaceAll()

//look into what are private methods

function randomIntegers(int1, int2) {
  return Math.floor(Math.random() * (int2 - int1 + 1) + int1);
}

let paulsRandomChar = randomIntegers(3, 9);

function giveCharKTimes(char, k) {
  if (k < 0) {
    return "Not valid input";
  }

  let resultStr = "";

  let counter = 0;
  while (counter < k) {
    resultStr += char;
    counter += 1;
  }
  return resultStr;
}

console.log(giveCharKTimes("!", paulsRandomChar));

function digits(arr) {
  let concatedDigits = arr.reduce((acc, num) => {
    acc += num;
    return acc;
  }, "");

  let newNumber = Number(concatedDigits) + 1;

  return newNumber.toString().split("").map(Number);
}

console.log(digits([1, 2, 3]));

function createFrequnecyObject(arr) {
  return arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
}

// function common(a, b, c) {
//let arrToSum = [];

// const objA = createFrequnecyObject(a);
// const objB = createFrequnecyObject(b);
// const objC = createFrequnecyObject(c);

// function summedUp(a2, b2, c2) {
//   let sum = 0;
//   for (let key in a2) {
//     if (b2[key] && c2[key]) {
//       let minFrequency = Math.min(a2[key], b2[key], c2[key]);
//       sum += Number(key) * minFrequency;
//     }
//   }
// }

function commonSum() {
  let finalSum;

  try {
    finalSum = summedUp(objA, objB, objC).reduce((acc, num) => acc + num);
  } catch (error) {
    finalSum = 0;
  }

  return finalSum;
}

console.log(commonSum([1, 2, 3], [5, 3, 2], [7, 3, 2]));

function hasThreeOrFewerLetters(str) {
  const uniqueLetters = new Set(str);
  return uniqueLetters.size <= 3;
}

console.log(hasThreeOrFewerLetters("Hello world"));
console.log(hasThreeOrFewerLetters("up"));

function filterWordsWithThreeOrFewerLetters(words) {
  return words.filter(hasThreeOrFewerLetters);
}

function doesWordContainCharsRSTLNE(words) {
  // let charsToCheck = "RSTLNE"
  return words.filter((word) =>
    word.split("").every((char) => "RSTLNE".includes(char))
  );
}

function CheckContainRSTLNE(word) {
  return word.split("").every((char) => "RSTLNE".includes(char));
}

function checksUsingSmallFunction(words) {
  return words.filter(CheckContainRSTLNE);
}

console.log(filterWordsWithThreeOrFewerLetters(scrabbleWords));
console.log(doesWordContainCharsRSTLNE(["NEST", "BIRD", "TREE"]));
console.log(CheckContainRSTLNE("COUCH"));
console.log(checksUsingSmallFunction(scrabbleWords));
const users = [
  {
    name: "Alice",
    age: 25,
    scores: {
      math: 85,
      english: 78,
      science: 93,
    },
  },
  {
    name: "Bob",
    age: 30,
    scores: {
      math: 89,
      english: 76,
      science: 90,
    },
  },
  {
    name: "Charlie",
    age: 28,
    scores: {
      math: 75,
      english: 88,
      science: 91,
    },
  },
  {
    name: "David",
    age: 22,
    scores: {
      math: 82,
      english: 90,
      science: 85,
    },
  },
];

// Now you can call the calculateStats function with this data:
//const stats = calculateStats(users);
//console.log(stats);

// Task: Given a list of user data (name, age, and scores in various tests), calculate the average age of users and the highest score for each test.

function averageAgeAndHighestScore(usersArry) {
  const highestScoresAndSumOfAge = usersArry.reduce(
    (acc, user, index) => {
      acc.sumOfAges += user.age;
      if (acc.scores.math < user.scores.math) {
        acc.scores.math = user.scores.math;
      }
      if (acc.scores.science < user.scores.science) {
        acc.scores.science = user.scores.science;
      }
      if (acc.scores.english < user.scores.english) {
        acc.scores.english = user.scores.english;
      }
      return acc;
    },
    {
      sumOfAges: 0,
      scores: {
        math: 0,
        english: 0,
        science: 0,
      },
    }
  );

  const averageAge = highestScoresAndSumOfAge.sumOfAges / usersArry.length;
  return {
    highestScores: highestScoresAndSumOfAge.scores,
    averageAge: averageAge,
  };
}

function bestScores(usersArray) {
  return usersArray.reduce(
    (acc, user, index) => {
      if (acc.scores.math < user.scores.math) {
        acc.scores.math = user.scores.math;
      }
      if (acc.scores.science < user.scores.science) {
        acc.scores.science = user.scores.science;
      }
      if (acc.scores.english < user.scores.english) {
        acc.scores.english = user.scores.english;
      }
      return acc;
    },
    {
      scores: {
        math: 0,
        english: 0,
        science: 0,
      },
    }
  );
}

function averageAge(usersArry) {
  const highestScoresAndSumOfAge = usersArry.reduce(
    (acc, user, index) => {
      acc.sumOfAges += user.age;

      return acc;
    },
    {
      sumOfAges: 0,
    }
  );

  const averageAge = highestScoresAndSumOfAge.sumOfAges / usersArry.length;
  return averageAge;
}

function userDataFormatting(userArry) {
  return {
    averageAgeIs: averageAge(userArry),
    highestTestScoresAre: bestScores(userArry),
  };
}

//console.log(averageAgeAndHighestScore(users));
//console.log(bestScores(users));
//console.log(averageAge(users));
console.log(userDataFormatting(users));

//now refactor the above and split it into three functions

var lengthOfLongestSubstring = function (s) {
  let longestString = "";
  let currentString = "";

  for (let char of s) {
    if (currentString.includes(char)) {
      currentString = "";
    }
    if (!currentString.includes(s)) {
      currentString += char;
    }

    if (longestString.length < currentString.length) {
      longestString = currentString;
    }
  }
  console.log(longestString);
  return longestString;
};

console.log(lengthOfLongestSubstring("aceadasdjskfjsiabcdefghkioplmn"));

const practiceArray = [3, 6, 3453, 3453453, 2, -234, 8, 1, 9, 4545, 34];

function findTheNewMax(arr) {
  return Math.max(...arr);
}

console.log(findTheNewMax(practiceArray));

function findTheNewestMin(arr) {
  return Math.min(...arr);
}

console.log(findTheNewestMin(practiceArray));

practiceArray.splice(2, 0, 100);
console.log(practiceArray);
let paulsBirthdayArray = practiceArray.splice(1, 4, 1989);

console.log(paulsBirthdayArray);

let removeArray = [3, 2, 2, 3];
var removeElement = function (nums, val) {
  console.log(nums);
  let iLength = nums.length - 1;

  for (let i = iLength; i > -1; i--) {
    console.log(nums);
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
    console.log(nums);
  }

  return nums;
};

console.log(
  removeElement(removeArray, 3),
  "  Here is the answer to the remove array"
);

console.log("Paul".repeat(40));

let arrayMovingZeros = [
  2, 5, 6, 7, 0, 7, 0, 5656, 0, 9999, 93, 2323, 3, 3, 3, 3, 0, 0, 0, 9, 9, 89,
  0, 0, 0, 99696699, 9,
];

function moveZeros(arr) {
  let positionsOfZero = 0;

  let zeroCount = arr.filter((num) => num === 0).length;

  console.log(zeroCount);

  let index = arr.length - 1;

  for (let i = arr.length - 1; i > -1; i--) {
    console.log(arr[i]);
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index--;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    arr[i] = 0;
    console.log(arr[i]);
  }

  return arr;
}

console.log(moveZeros(arrayMovingZeros));

let orderedArray = [1, 5, 6, 7, 8, 9, 14, 18];

var searchInsert = function (nums, target) {
  //split the array in have and if the number at the halfway point if larger than target
  // use the top have of the array, if its smaller use the bottom half, continue until we
  // have a match or cant divide anymore

  //let halfWayPointOfarray = nums[Math.floor(nums.length / 2)];

  function halfWayIndexOfarray(arr) {
    return Math.floor(nums.length / 2);
  }

  if (nums[halfWayIndexOfarray(nums)] > target) {
    //I need to figure out how to get 3 fourths of the array

    let endIndexOfnums = nums.length - 1;
    let beginningIndexForSlice = halfWayIndexOfarray(nums);
    nums.slice(nums.index(beginningIndexForSlice), endIndexOfnums);
  }

  console.log("this is the halfway", halfWayIndexOfarray(nums));
};

searchInsert(orderedArray, 13);

let nullTest = null;

let coeleaseTest = nullTest ?? " this is a nullish test";

console.log(coeleaseTest);

var isIsomorphic = function (s, t) {
  function objectMaker(string) {
    let resulstObect = {};
    string.split("").forEach((char) => {
      if (resulstObect[char] === "undefined") {
        console.log(char);
      }
    });
  }
  objectMaker(s);
};

isIsomorphic("hey hey hye", "nooooo");

class LinkedList {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let firstNode = new LinkedList(11);
let secondNode = new LinkedList(98987646535 % 2);
firstNode.next = secondNode;
let thirdNode = new LinkedList(3);
secondNode.next = thirdNode;
let fourthNode = new LinkedList(4);
thirdNode.next = fourthNode;
let fithNode = new LinkedList(9853749857);
fourthNode.next = fithNode;

function printNodeList(head) {
  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

printNodeList(firstNode);

class LinkedListTwo {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let firstNodeSecondList = new LinkedList(11111);
let secondNodeSecondList = new LinkedList(222222);
firstNodeSecondList.next = secondNodeSecondList;

printNodeList(firstNodeSecondList);

function reverseNodeList(head) {
  let next = null;
  let current = head;
  let prev = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;

    prev = current;

    current = next;
  }
  return prev;
}

reverseNodeList(firstNode);

console.log(fithNode);

class LinkedListCreation3 {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
let newNodetwo = new LinkedListCreation3(200);
let newNodeOne = new LinkedListCreation3(100, newNodetwo);

let newNodeThree = new LinkedListCreation3(28374623864);
newNodetwo.next = newNodeThree;

function printNodes2(head) {
  let currentNode = head;
  let next = head.next;
  let bust = false;

  while (bust !== true) {
    console.log("this is my lastest linked list exercise", currentNode.value);
    // currentNode.next = null ? (bust = true) : (bust = false);
    if (currentNode.next !== null) {
      currentNode = currentNode.next;
    } else {
      bust = true;
    }
  }
}

printNodes2(newNodeOne);
