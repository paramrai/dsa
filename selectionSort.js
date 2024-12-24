// selection sort algorithm
// make first index element as minValueINdex
// compare with second-to last element in array
// and swap the index with lowest value in array

const selectionSort = (array) => {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }

  return array;
};

const array = [5, 8, 9, 55, 42, 2, 6, 99];
console.log(selectionSort(array));
