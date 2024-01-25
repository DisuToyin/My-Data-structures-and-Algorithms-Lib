function quickSort(arr) {
  if (arr.length === 1) return arr;
  let left_array = [];
  let right_array = [];

  let pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right_array.push(arr[i]);
    } else {
      left_array.push(arr[i]);
    }
  }

  if (left_array.length > 0 && right_array.length > 0) {
    return [...quickSort(left_array), pivot, ...quickSort(right_array)];
  } else if (left_array.length > 0) {
    return [...quickSort(left_array), pivot];
  } else {
    return [pivot, ...quickSort(right_array)];
  }
}

const arr = [9, 32, -1, 2, 10, -4, 8, 10, 3, 6];
console.log(quickSort(arr));
