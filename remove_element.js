function removeElement(arr, val){
    let k=0
    for(var i = 0; i<=arr.length-1; i++){
        if (arr[i] != val){
            arr[k]=arr[i]
            k=k+1
        }
        
    }
    return k
}


console.log(removeElement([3, 2, 2, 3], 2))