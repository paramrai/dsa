const arr = [99, 98, 97, 96, 50, 40, 5, 4, 3, 2, 1];

// Bubble Sort implementation
// inner loop goes through the array and Swap values if first value is greater than next value
// inner loop must loop through one less value each time it runs (arr.length - 1 - i)
// i represents index of outer loop
// for first run (arr.length - 1)
// for second (arr.length - 2) and goes on this optimize loop and exclude the last 1 element
// for third (arr.length - 3) and goes on this optimize loop and exclude the last 2 element
// outer loop controls how many time inner loop must run (arr.length - 1)

const bubbleSortArray = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

console.log(bubbleSortArray(arr));

// bubbleSortArray Imnprovements
const array2 = [7, 3, 9, 12, 11];

// During the first run and discuss an improvement
// for the algorithm to avoid unnecessary passes.

// Bubble Sort First Run
// Initial array: [7, 3, 9, 12, 11]
// First comparison: Compare 7 and 3.
// Swap because 7 > 3.
// Resulting array: [3, 7, 9, 12, 11]

// Second comparison: Compare 7 and 9.
// No swap because 7 <= 9.
// Resulting array: [3, 7, 9, 12, 11]

// Third comparison: Compare 9 and 12.
// No swap because 9 <= 12.
// Resulting array: [3, 7, 9, 12, 11]

// Fourth comparison: Compare 12 and 11.
// Swap because 12 > 11.
// Resulting array: [3, 7, 9, 11, 12]

// Array after first run: [3, 7, 9, 11, 12]

// we can use break if no swaps were done in last run

const bubbleSortArrayImproved = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let noSwaps = true;
    console.log(`${count++} = ${noSwaps}`);
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
        console.log(`${count++} = ${noSwaps}`);
      }
    }
    if (noSwaps) break;
  }

  return arr;
};

console.log(bubbleSortArrayImproved(array2));
