function validPal(s) {
  // Regular expression to match non-alphabet characters
  const pattern = /[^a-zA-Z0-9]/g;
  const processString = s.replace(pattern, "").toLowerCase();

  let left = 0;
  let right = processString.length - 1;

  // Convert the string to an array of characters (for swapping)
  const charArray = processString.split("");

  while (left <= right) {
    let temp = charArray[left];
    charArray[left] = charArray[right];
    charArray[right] = temp;
    left++;
    right--;
  }
  const reversedString = charArray.join("");

  return reversedString === processString ? true : false;
}

console.log(validPal("0P"));
