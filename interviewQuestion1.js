// Write a function that takes two arguments, a list of prohibited strings and a username, and returns a
// boolean of whether or not the username contains any of the prohibited strings.

// Some important details:

// - The list of prohibited words will provide words in some casing, and we want to be case-insensitive in our checks. For example,
// if “darn” is a prohibited word, “darn”, “DARN” and
// “DaRn” are all prohibited.
// - Sometimes people like to make usernames that substitute numbers for letters, to try to get around a prohibited word
// list. We also want to make those substitutions prohibited. The specific letter substitutions we need to check are:
//     - A becomes 4
//     - E becomes 3
//     - I becomes 1
//     - O becomes 0
//     - For example, if “darn” is a prohibited word, “d4rn” is also a prohibited word. If “darn” and “heck” are prohibited words,
//      the username “D4RN_y0u_T0_h3ck” contains prohibited words.

//1. make eery word toUpperCase() 2. so if a common swap elemnt is dectected, reswapp and check if the word thats swapped the char is in the
// prohibited list.3 there will be an array of characters that might need to be swapped

let prohibitedWords = ["heck", "darn"];

let charactersToSwap = [
  [4, "A"],
  [3, "E"],
  [1, "I"],
  [0, "O"],
];

function passWordCheck(prohibitedWords, userName, charactersToSwap) {
  let upperCaseUserNameArray = userName.toUpperCase();

  for (let item of charactersToSwap) {
    upperCaseUserNameArray = upperCaseUserNameArray.replaceAll(
      item[0],
      item[1]
    );
  }

  for (let word of prohibitedWords) {
    if (upperCaseUserNameArray.includes(word.toUpperCase())) {
      return "this is an invalid username";
    }
  }

  return upperCaseUserNameArray;
}

console.log(passWordCheck(prohibitedWords, "Paul_Henderson", charactersToSwap));
