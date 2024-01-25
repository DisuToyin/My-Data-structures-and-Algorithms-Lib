function squareSum(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

function happyNumber(num) {
  let fast = num;
  slow = num;

  while (true) {
    slow = squareSum(slow);
    fast = squareSum(squareSum(fast));
    if (slow === fast) {
      break;
    }
  }

  return slow === 1;
}

console.log(happyNumber(12));
