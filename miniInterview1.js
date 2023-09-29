// Write a function that takes as input two arguments:

// 1. An array of numbers
// 2. An integer `k`

// and returns the `k` largest values from that array. The order of the elements in the returned array doesn’t matter.

// Example

// - Input array: `[5, 16, 7, 9, -1, 4, 3, 11, 2]`
// - `k`: 3
// - Result: `[16, 9, 11]`

//1. inputs are an array, and a number k, output is the K largest integers. 2. first our array 3. then we slice our sorted arry at k, 4. return
// the sliced array

const testArr = [6, 8, 123, 6, 4, 2, 1, 7, 8, 4564, 2, 43, 2343223];

function kLargest(arr, k) {
  return arr.sort((a, b) => b - a).slice(0, k);
}

console.log(kLargest(testArr, 2));
