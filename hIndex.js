function hIndex(citations) {
  citations.sort((a, b) => b - a); // Sort the citations in descending order

  let hIndex = 0;

  while (hIndex < citations.length && citations[hIndex] >= hIndex + 1) {
    hIndex++;
  }

  return hIndex;
}

console.log(hIndex([3, 0, 6, 1, 5]));
