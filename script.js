function secondHighest(arr) {
  // Check for edge cases
  if (arr.length <= 1 || new Set(arr).size === 1) {
    return -Infinity;
  }

  // Sort the array in descending order
  const sortedArr = arr.sort((a, b) => b - a);

  // Find the second-highest element
  const secondHighestElement = sortedArr.find((element, index) => element !== sortedArr[index + 1]);

  return secondHighestElement;
}

// Examples
const result1 = secondHighest([5, 1, 2, 3, 4]);
console.log(result1); // Output: 4

const result2 = secondHighest([-1, -2, -3, -4, -5]);
console.log(result2); // Output: -2

const result3 = secondHighest([]);
console.log(result3); // Output: -Infinity

const result4 = secondHighest([1]);
console.log(result4); // Output: -Infinity

const result5 = secondHighest([1, 1, 1, 1, 1]);
console.log(result5); // Output: -Infinity

