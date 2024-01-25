function insertInterval(interval, newInterval) {
  let result = [];

  for (let i = 0; i < interval.length; i++) {
    let currentInterval = interval[i];
    if (newInterval[1] < currentInterval[0]) {
      //non overlapping
      result.push(newInterval);
      result.push(currentInterval);
      return result;
    } else if (newInterval[0] > currentInterval[1]) {
      // non overlapping
      result.push(currentInterval);
    } else {
      //overlapping
      newInterval = [
        Math.min(currentInterval[0], newInterval[0]),
        Math.max(currentInterval[1], newInterval[1]),
      ];
    }
  }
  result.push(newInterval);
  return result;
}

console.log(
  insertInterval(
    [
      [1, 3],
      [5, 7],
      [8, 12],
    ],
    [4, 6]
  )
);
