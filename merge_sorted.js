function merge_sorted_arrays(nums1, m, nums2, n) {
  let last_index = m + n - 1;

  while (m > 0 && n > 0) {
    if (nums2[n - 1] > nums1[m - 1]) {
      nums1[last_index] = nums2[n - 1];
      n = n - 1;
    } else {
      nums1[last_index] = nums1[m - 1];
      m = m - 1;
    }

    last_index = last_index - 1;
  }

  while (n > 0) {
    nums1[last_index] = nums2[n - 1];
    last_index = last_index - 1;
    n = n - 1;
  }
  return nums1;
}

console.log(merge_sorted_arrays([7, 8, 9, 0, 0, 0], 3, [2, 5, 6], 3));
