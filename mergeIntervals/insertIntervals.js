function insertInterval(interval, newInterval) {
  let result = [];
  let start = 0;
  let end = Infinity;

  for (let i = 0; i < interval.length; i++) {
    let currentInterval = interval[i];
    if (currentInterval[0] > newInterval[1]) {
      //   result.push(currentInterval);
    } else {
      start = Math.min(currentInterval[0], newInterval[0]);
      end = Math.max(currentInterval[1], newInterval[1]);
      result.push([start, end]);
    }
  }
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
