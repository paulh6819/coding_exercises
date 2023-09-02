import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

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
