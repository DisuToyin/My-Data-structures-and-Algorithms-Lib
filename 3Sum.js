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

function threeSum(arr) {
  // brute force
  //   let result = [];
  //   for (let i = 0; i < arr.length - 2; i++) {
  //     for (let j = i + 1; j < arr.length - 1; j++) {
  //       for (let k = j + 1; k < arr.length; k++) {
  //         // Now you can use i, j, and k to access elements from the array.
  //         console.log({ i: arr[i], j: arr[j], k: arr[k] });
  //         if (arr[i] + arr[j] + arr[k] === 0) {
  //           result.push([arr[i], arr[j], arr[k]]);
  //         }
  //       }
  //     }
  //   }
  //   return result;

  const sortedArray = quickSort(arr);
  let result = [];

  for (let i = 0; i < sortedArray.length; i++) {
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) {
      //skip this
      continue;
    }

    let left = i + 1;
    let right = sortedArray.length - 1;
    while (left < right) {
      let triSum = sortedArray[i] + sortedArray[left] + sortedArray[right];

      if (triSum > 0) {
        right--;
      } else if (triSum < 0) {
        left++;
      } else {
        result.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
        left++;
        //ensure no repeated numbers
        while (sortedArray[left] === sortedArray[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, -2, -1, -4]));
