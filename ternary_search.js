function ts(arr, left, right, target){
    while (left<=right){
        let mid1 = Math.floor(left + (right-left)/3 )
        let mid2 = Math.floor(right - (right-left)/3 )

        if (arr[mid1] === target) return mid1
        else if (arr[mid2] === target) return mid2 
        else if ( target < arr[mid1]){
            return ts(arr, mid1+1, right, target)
        }
        else if ( target > arr[mid2]){
            return ts(arr, mid2+1, right, target)
        }else return ts(arr, mid1-1, mid2+1, target)



    }
}