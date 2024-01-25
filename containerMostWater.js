function maxArea(heights) {
  // brute force

  //   let result = 0;

  //   for (let left = 0; left < heights.length; left++) {
  //     for (let right = 1; right < heights.length; right++) {
  //       let area = (right - left) * Math.min(heights[left], heights[right]);
  //       result = Math.max(area, result);
  //     }
  //   }

  //   return result;

  //   two pointers optimal solution
  let left = 0;
  let right = heights.length - 1;
  let result = 0;

  while (left < right) {
    let area = (right - left) * Math.min(heights[left], heights[right]);
    result = Math.max(area, result);
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
