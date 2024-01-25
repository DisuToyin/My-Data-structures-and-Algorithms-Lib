function lastWordLength(s) {
  //   let trimmedString = s.trim(); // remove the space from teh start and end
  //   let stringArray = trimmedString.split(" ");
  //   return stringArray[stringArray.length - 1].length;

  // start from the back

  let pointer = s.length - 1;
  let wordCount = 0;

  while (s[pointer] === " ") {
    pointer = pointer - 1;
  }
  while (pointer >= 0 && s[pointer] != " ") {
    wordCount = wordCount + 1;
    pointer--;
  }

  return wordCount;
}

console.log(lastWordLength("hellow World"));
