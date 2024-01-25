function bubbleSort(arr){
    let array_length = arr.length
    for (let i=0; i<array_length-1; i++){
        console.log({i})
        for(var j=0; j<array_length-i-1; j++){
            console.log({j})
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr

}
const arr = [9, 32, -1, 2, 10, -4, 8, 10, 3, 6 ]
console.log(bubbleSort(arr))