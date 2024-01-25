function productSelf(nums) {
  let prefix = 1;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    console.log(res[i]);
    prefix = prefix * nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * postfix;
    postfix = postfix * nums[i];
    console.log(res[i]);
  }

  return res;
}

console.log(productSelf([1, 2, 3, 4]));
