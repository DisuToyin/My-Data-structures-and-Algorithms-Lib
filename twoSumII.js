function twoSum(numbers, target) {
  let res = [];
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    console.log({ left, right });
    if (numbers[left] + numbers[right] === target) {
      res = [left + 1, right + 1];
      return res;
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
