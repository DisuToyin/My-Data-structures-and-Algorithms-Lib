function rotateArray(nums, k){
    k = k % nums.length // incase k is more than the length of the array
    console.log({k})
    let right = nums.length - 1
    let left = 0

    while(left < right){
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++
        right--
    }

    left = 0
    right = k - 1

    while(left < right ){
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++
        right--
    }

    left = k
    right = nums.length - 1
    while(left < right ){
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++
        right--
    }

    return nums

}

console.log(rotateArray([1,2], 3))