// You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. 
// They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.
function highestCandleJs(candles) {
    var count = {};
    var maximumHeight = 0;
    for (var i = 0; i < candles.length; i++) {
        var firstNum = candles[i];
        if (count[firstNum]) {
            count[firstNum] = count[firstNum] + 1;
        }
        else {
            count[firstNum] = 1;
        }
        // to keep track of the highest candle
        if (firstNum > maximumHeight) {
            maximumHeight = firstNum;
        }
    }
    console.log(count[maximumHeight]);
    return count[maximumHeight];
}
highestCandle([1, 2, 3, 4, 5, 3, 4, 3]);
