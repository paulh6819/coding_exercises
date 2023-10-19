// This is a classic 60 minute interview question.

// Given a string of different bracket types (parentheses, square brackets, and curly braces), write a function that returns whether or not the string is balanced.

// The string is balanced if each opening bracket is followed by a corresponding close bracket, and all brackets between those open and close brackets are also balanced.

// practice smaller problems than using a stack - another data structure. And then look at ques

let test1 = `{[()]}`;
let test2 = `{}[]()(){}`;
let test3 = `[(){()}]`;

function validInput(input) {
  // let splitInput = input.split("")

  if (input.length % 2 !== 0) {
    return false;
  }

  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "{" && input[i + 1] === "}") {
      counter += 1;
    }
    if (input[i] === "[" && input[i + 1] === "]") {
      counter += 1;
    }
    if (input[i] === "(" && input[i + 1] === ")") {
      counter += 1;
    }
  }
  console.log(counter);
  return input.length / 2 === counter;
}

function validInput2(input) {
  // let splitInput = input.split("")

  if (input.length % 2 !== 0) {
    return false;
  }

  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    if (
      input[i] === "{" &&
      input.slice(i + 1, input.length + 1).includes("}")
    ) {
      counter += 1;
    }
    if (
      input[i] === "[" &&
      input.slice(i + 1, input.length + 1).includes("]")
    ) {
      counter += 1;
    }
    if (
      input[i] === "(" &&
      input.slice(i + 1, input.length + 1).includes(")")
    ) {
      counter += 1;
    }
  }
  console.log(counter);
  return input.length / 2 === counter;
}

console.log(validInput2(test2));
