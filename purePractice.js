//Questions - things to go over and practice
// 1. what is the differnce between a prototype method and a static method?

// 2. what is the call stack? How does it apply to you or how do you apply it? can we do anything quickly to demonstrate it?

// notes
// 1. when you use slice, the first number in the index of .slice(4) is inclusive and if you only use one number it will call the rest
// of the string

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
