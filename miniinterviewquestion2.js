// Write a function that takes as input two arguments:

// 1. An array of numbers
// 2. An integer `k`

// and returns an array with all of the pairs of numbers from that array that sum to `k`. You can’t use the same number twice. You can assume that there are no duplicate numbers in the array.

// Example

// - Input array: `[1, 9, 6, 3, 5, 4]`
// - `k`: 10
// - Result: `[[1, 9], [6, 4]]` // Note that `[5, 5]` is not in the solution

//1. input an array and an intergeter k, output an array of arrays with 2 elements that each add up to k. 2. make a function with two parameters.
// 3. make a result array. 4. have a forloop that goes over the input array. 5 have an inner forloop using a j + 1 iteration, is i and j add up to
//k, push push arry[i] and array[j] to result array. 6. return results

const result = [];
const arr = [1, 9, 6, 3, 5, 4];
const k = 10;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === k) {
      result.push([arr[i], arr[j]]);
    }
  }
}

console.log(result);
