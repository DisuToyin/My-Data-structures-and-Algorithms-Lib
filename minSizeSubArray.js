function minSizeSubArray(arr, target) {
  let left = 0;
  let right = 0;
  let min = Infinity;

  let currentSum = 0;
  while (right < arr.length) {
    currentSum = currentSum + arr[right];
    while (currentSum >= target) {
      // continue to shrink the currentSum until its less than the target
      min = Math.min(min, right - left + 1);
      currentSum = currentSum - arr[left];
      left++;
    }

    right++;
  }
  return min === Infinity ? 0 : min;
}

console.log(minSizeSubArray([2, 3, 1, 2, 4, 3], 7));
