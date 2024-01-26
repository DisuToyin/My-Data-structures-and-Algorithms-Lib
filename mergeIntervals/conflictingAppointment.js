// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.
// Appointments: [[1,4], [2,5], [7,9]]
// Output: false
// Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.

function conflict(arr) {
  let start = arr[0][0];
  end = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    let currentArr = arr[i];
    if (currentArr[0] > start && currentArr[0] < end) {
      //there's an overlap
      console.log("gets here");
      return true;
    } else {
      start = currentArr[0];
      end = currentArr[1];
      console.log([start, end]);
    }
  }
  return false;
}

console.log(
  conflict([
    [4, 5],
    [2, 3],
    [3, 6],
    [5, 7],
    [7, 8],
  ])
);
