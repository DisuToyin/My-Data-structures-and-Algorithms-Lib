function longestSubstringWithoutRepeating(s) {
  if (s.length === 0) return 0;
  let refMap = {};
  let longestSS = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (!(s[right] in refMap) || refMap[s[right]] === 0) {
      refMap[s[right]] = 1;
      longestSS = Math.max(longestSS, right - left + 1);
    } else {
      // this blocks runs when you get a char thats in the Map, when this happens keep shifting left pointer until you get to right pointeer
      while (s[left] !== s[right]) {
        refMap[s[left]] = 0;
        left++;
      }
      left++; // Move left pointer to the next position after the repeating character
    }

    right++;
  }
  return longestSS;
}

console.log(longestSubstringWithoutRepeating("ckilbkd"));
