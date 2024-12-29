const array = [4, 2, 2, 8, 3, 3, 1, 5, 56, 6, 6, 6, 5, 65, 65, 5];

function countingSort(arr) {
  // find the maximum value

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // create a count array with size of max - min + 1
  const count = new Array(max - min + 1).fill(0);

  // increment count array for each element in arr
  arr.forEach((num) => count[num - min]++);

  // cumulative sum array
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // create a sorted array
  const sortedArr = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArr[--count[arr[i] - min]] = arr[i];
  }
  return sortedArr;
}

console.log(countingSort(array));
