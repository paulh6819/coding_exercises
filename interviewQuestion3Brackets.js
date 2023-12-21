// This is a classic 60 minute interview question.

// Given a string of different bracket types (parentheses, square brackets, and curly braces), write a function that returns whether or not the string is balanced.

// The string is balanced if each opening bracket is followed by a corresponding close bracket, and all brackets between those open and close brackets are also balanced.

// practice smaller problems than using a stack - another data structure. And then look at ques

let test1 = `{[()]}`;
let test2 = `{}[]()(){}`;
let test3 = `[(){()}]`;
let test4 = `[{(})]`;

function isValidStr(input) {
  let stack = [];

  for (let bracket of input) {
    if (
      (stack.length > 0 &&
        bracket === "}" &&
        stack[stack.length - 1] === "{") ||
      (stack.length > 0 &&
        bracket === "]" &&
        stack[stack.length - 1] === "[") ||
      (stack.length > 0 && bracket === ")" && stack[stack.length - 1] === "(")
    ) {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  }
  if (stack.length === 0) {
    return "this is a vlaid string";
  } else {
    return "this is not a valid string";
  }
}
console.log("this is my newest post study coding exercise", isValidStr(test3));
console.log("this is my newest post study coding exercise", isValidStr("}{"));
console.log("this is my newest post study coding exercise", isValidStr("()"));
console.log("this is my newest post study coding exercise", isValidStr(test2));
console.log("this is my newest post study coding exercise", isValidStr(test1));
console.log("this is my newest post study coding exercise", isValidStr(test4));
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

//console.log(validInput2(test2));

//1. have an empty array, and then push to the array and then check as we go if we have a closed pair
//2. a string of closed pairs that we can test to see if what we have in the array is a true closed pair;
//3. we have a for loop that loops over the input array pushing to the empty array and where we implement the logic of
//checking for closed pairs at the end of out prieviously empty array
//4. if out array that started empty contains any characters, it fails the test and we return false, else we return true

function stackSolution(arr) {
  let stack = [];
  let validClosures = ["()", "{}", "[]"];

  for (let item of arr) {
    stack.push(item);

    if (validClosures.includes(`${stack.at(-2)}${stack.at(-1)}`)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.assert(stackSolution(test1));
console.assert(stackSolution("{}{}{{{{{{{{"));
console.assert(
  stackSolution("{{}{}}{)()()())()()0000)))"),
  "YOU ARE A FAILURE SHIP DESTROYED"
);
console.log(stackSolution(test3));
