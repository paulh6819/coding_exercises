// Below is the homework and notes from Wedsday september 13th

// redo this using set, and regardless improve the speed someway for practice.

//Micheal said he liked my instict to use Set
function numberOneSongs(data) {
  let numberOne = data
    .filter((item) => parseInt(item.rank) === 1)
    .map((element) => {
      return `"${element["artist"]}"- ${element["song"]}`;
    });

  return new Set(numberOne);
}
for (let str of numberOneSongs(billBoardData)) {
  console.log(str);
}
// look more into set theory

//interesting notes on sets:
//1.Objects in Arrays:
//When you store objects in an array, the array doesn't contain the actual object data. Instead, it contains references to those objects. Each object, even if its content
//s identical to another object, resides in a unique memory location, and thus has a unique reference.

// should see the times on my previous questions

//9/18/2023
//
//1. software architecture is it's own job. Its difficult. Me as an engineer, would listen to the architecture to direct the structre
// of the apps code base. - look into this more. Foundational concept.(Reminds me of the overall design of a something.) A lack of this type of
// thinking as led to many problems with my own app. But the importance of software archietecture increases as the projet increases in
// complexity and the number of people involved increase.
//       a. MVC is a type of architecure - should look into.

//9/19/2023

//home work - figure out how to clean up the data or maybe even reparse, or a seperate parser to figure out
// if a line in the CSV file is incorrectly formatted.

//9/20/2030
// 1. look into nesting arrays and objects within objects and how to access them efficently 2. adding to sets

//9/20/2023

//remember - inorder to "contine" or "skip" -- in a forEach you can just use return
//f (key === "") {
//return;
//}

//9/22/2023

// you can directly use Set on a string. no need to convert first to a an array

//Using Sets

//function useAllAvailibleLettersb(words, str) {
// return words.filter((word) => {
//     const letters = new Set(str);

//     return word.split("").every((char) => letters.has(char));
//   });
// }

// console.log(useAllAvailibleLettersb(scrabbleWords, "ZPIA"));

//9/24/2023

//// look up the differnece between a stack and a queue as they relate to computer science

/// Math.abs() -- brings back the absolute value, fort example -5 and 5 will both return as 5

/// typeof whatEverYourVaribleIs --- will print out a string telling you what data type your varible is

/// x.toString() -- this will convert a varible that points to a integer into a string data type
