function isSubsequence(s, t) {
  if (s == "") return true;
  let indexArray = [];
  let s_pointer = 0;
  let t_pointer = 0;

  while (s_pointer < s.length && t_pointer < t.length) {
    if (s[s_pointer] == t[t_pointer]) {
      indexArray.push(t_pointer);
      s_pointer++;
    }

    t_pointer++;
  }
  if (indexArray.length < s.length) {
    //not a subsequence
    return false;
  } else {
    // lets check if the indexing is in a progressing order
    for (let i = 0; i < indexArray.length; i++) {
      if (indexArray[i + 1] < indexArray[i]) {
        return false;
      }
      return true;
    }
  }
}

console.log(isSubsequence("ace", "abcde"));
