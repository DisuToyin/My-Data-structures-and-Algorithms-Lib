function canJump(nums) {
  let goal = nums[nums.length - 1];
  for (let i = nums.length - 1; i >= 0; i--) {
    console.log({ goal, i, elem: nums[i] });
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }
  return true ? goal == 0 : false;
}

console.log(canJump([2, 3, 1, 1, 5]));
