function findSubstring(s, words) {
  if (!s || !words || words.length === 0) {
    return [];
  }

  const wordLen = words[0].length;
  const totalLen = wordLen * words.length;
  const wordsCount = {};

  for (const word of words) {
    if (wordsCount[word]) {
      wordsCount[word]++;
    } else {
      wordsCount[word] = 1;
    }
  }

  const result = [];

  for (let i = 0; i < wordLen; i++) {
    let left = i;
    let right = i;
    const windowMap = {};

    while (right + wordLen <= s.length) {
      const word = s.slice(right, right + wordLen);
      if (windowMap[word]) {
        windowMap[word]++;
      } else {
        windowMap[word] = 1;
      }

      if (right - left + wordLen === totalLen) {
        if (isEqual(windowMap, wordsCount)) {
          result.push(left);
        }

        const leftWord = s.slice(left, left + wordLen);
        windowMap[leftWord]--;
        if (windowMap[leftWord] === 0) {
          delete windowMap[leftWord];
        }
        left += wordLen;
      }

      right += wordLen;
    }

    if (left < right) {
      const windowWord = s.slice(left, right);
      windowMap[windowWord]--;
      if (windowMap[windowWord] === 0) {
        delete windowMap[windowWord];
      }
    }
  }

  return result;
}

function isEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// Example usage
const s = "barfoothefoobarman";
const words = ["foo", "bar"];
console.log(findSubstring(s, words)); // Output: [0, 9]
