function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  // Sort the intervals based on the starting value
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let i = 1; i < intervals?.length; i++) {
    let currentInterval = intervals[i];
    let lastMerged = result[result?.length - 1];

    if (currentInterval[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(currentInterval[1], lastMerged[1]);
    } else {
      result.push(currentInterval);
    }
  }

  return result;
}

function mergeIntervals2(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }

  // sort
  intervals.sort((a, b) => a[0] - b[0]);

  let mergedIntervals = [];
  start = intervals[0][0];
  end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];

    if (currentInterval[0] <= end) {
      end = Math.max(currentInterval[1], end);
    } else {
      mergedIntervals.push([start, end]);
      start = currentInterval[0];
      end = currentInterval[1];
    }
  }
  mergedIntervals.push([start, end]);
  return mergedIntervals;
}

// Example usage:
const inputIntervals = [
  [1, 3],
  [4, 6],
  [5, 7],
  [8, 12],
];
const mergedIntervals = mergeIntervals2(inputIntervals);
console.log(mergedIntervals);
