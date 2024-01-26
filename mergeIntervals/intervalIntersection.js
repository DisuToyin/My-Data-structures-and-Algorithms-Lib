function intervalIntersection(arr1, arr2) {
  let result = [];
  let i = 0;
  j = 0;

  while (i < arr1.length && j < arr2.length) {
    const [start1, end1] = arr1[i];
    const [start2, end2] = arr2[j];

    // Find the intersection
    const start = Math.max(start1, start2);
    const end = Math.min(end1, end2);

    // Check if there is a valid intersection
    if (start <= end) {
      result.push([start, end]);
    }
    if (end1 < end2) i++;
    else j++;
  }

  return result;
}

let arr1 = [
  [1, 3],
  [5, 6],
  [7, 9],
];
let arr2 = [
  [2, 3],
  [5, 7],
];
console.log(intervalIntersection(arr1, arr2));
