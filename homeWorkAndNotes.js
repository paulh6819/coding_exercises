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
