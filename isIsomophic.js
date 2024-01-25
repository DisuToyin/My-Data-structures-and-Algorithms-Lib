function isIsomorphic(str1, str2) {
  if (str1.length !== str2.length) {
    return false; // If the lengths are different, they can't be isomorphic.
  }

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    if (map1[char1] === undefined && map2[char2] === undefined) {
      // If the characters are not mapped, create a mapping.
      map1[char1] = char2;
      map2[char2] = char1;
    } else if (map1[char1] !== char2 || map2[char2] !== char1) {
      // If the characters are already mapped, they should match the existing mapping.
      return false;
    }
  }

  return true;
}

console.log(isIsomorphic("foo", "bar"));
