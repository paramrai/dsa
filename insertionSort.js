const array = [9, 8, 10, 6, 2, 3, 40, 5, 6, 11];

const insertionSort = (array) => {
  let n = array.length;

  for (let i = 1; i < n; i++) {
    let current = array[i]; // current element
    let j = i - 1; // index of element before current

    while (j >= 0 && array[j] > current) {
      // if current element is smaller than element before current
      // then its shifts element to left
      array[j + 1] = array[j];
      j--;
    }
    // insert the before wala element in its correct position
    array[j + 1] = current;
  }

  return array;
};

console.log(insertionSort(array));

const array2 = [9, 8, 10, 6, 2, 3, 40, 5, 11];

const insertionSortRecursive = (array, n) => {
  if (n <= 1) {
    return;
  }
  insertionSortRecursive(array, n - 1);
  let last = array[n - 1]; // last element in array
  let j = n - 2; // index of second last element
  while (j >= 0 && array[j] > last) {
    array[j + 1] = array[j];
    j--;
  }
  array[j + 1] = last;
};
const insertionSort2 = (array) => {
  insertionSortRecursive(array, array.length);
  return array;
};

console.log(insertionSort2(array2));
