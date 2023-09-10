//Write a function that takes a string word as the first argument, a string letter as the second
//argument, and returns a count of how many times letter occurs in word.

//first make a function that take a word and a letter

function countsLetters(word, letter) {
  return word.split("").reduce((acc, char) => {
    if (char === letter) {
      acc += 1;
    }
    return acc;
  }, 0);
}

console.log(countsLetters("heyhh", "h"));

//using filter

function countsLettersWithFilter(word, letter) {
  return word.split("").filter((char) => char === letter).length;
}

console.log(countsLettersWithFilter("mississippi's", "s"));
