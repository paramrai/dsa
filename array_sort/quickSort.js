// Quick short algorithm

// divide and conquer method
// select a pivot element in array
// less than pivot goes left
// greater than pivot goes right

const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const quickSort = (array) => {
  if (array.length <= 1) return array;

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let elem of array.slice(0, -1)) {
    if (elem < pivot) {
      left.push(elem);
    } else {
      right.push(elem);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(array));
