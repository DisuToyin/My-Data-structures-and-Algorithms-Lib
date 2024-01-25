function removeDuplicates(arr){
    let left=1

    for(var right=1; right<arr.length; right++){
        console.log({left: arr[left], right: arr[right], prev: arr[right - 1]})
        console.log({leftx: left, rightx: right, prevx: right - 1})

        console.log("--------------------------------------------------")
        console.log("--------------------------------------------------")
        console.log(arr)

        if(arr[right] !== arr[right-1]){
            
            arr[left] = arr[right]
            left=left+1

        }

        

    }
    return left
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))