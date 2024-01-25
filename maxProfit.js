function maxProfit(prices){
    let currentProfit = 0
    let profit = 0
    let left = 0
    let right = 1

    while (right < prices.length){
        if(prices[left] < prices[right]){
            currentProfit = prices[right] - prices[left]
            profit = currentProfit > profit ? currentProfit : profit
        }else{
            left=right
        }

        right++
    }
    return profit
}

console.log(maxProfit([2,4,1]))