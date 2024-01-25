// Find the Index of the First Occurrence in a String

function strStr(str, target) {
  const targetLength = target.length;
  const strLength = str.length;

  for (let i = 0; i <= strLength - targetLength; i++) {
    let match = true;
    for (let j = 0; j < targetLength; j++) {
      if (str[i + j] !== target[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return i;
    }
  }

  return -1; // Target substring not found
}

console.log(strStr("kaypay", "pay"));
