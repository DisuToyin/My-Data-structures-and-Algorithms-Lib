function majorityElem(nums){
    let count = 0;
    let candidate = null;
  
    for (const num of nums) {
      if (count === 0) {
        candidate = num;
      }
  
      if (num === candidate) {
        count++;
      } else {
        count--;
      }
    }
  
    return candidate;
}

console.log(majorityElem([2,3,3,4]))