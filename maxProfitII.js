function maxProfit(prices){
    let left = 0
    let right = 1
    let cp = 0
    let p = 0

    while(right < prices.length){
        if(prices[left] < prices[right]){
            cp = prices[right] - prices[left]
            console.log({left: prices[left]})
            console.log({right: prices[right]})
            console.log({cp})
            p = cp+p   
 
        }
        left++
        right++
    }
    return p
}

console.log(maxProfit([1,2,3,4,5]))