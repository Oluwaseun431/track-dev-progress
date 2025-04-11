
// You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. 
// They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.

function highestCandle(candles: number[]): void{
    const count: { [key: string]: number } = {};
    const repeatedNumbers: number[] = [];

    for(let i = 0; i < candles.length; i++){
        let firstNum = candles[i];
        if(count[firstNum]){
            count[firstNum] += 1;
        }
        else{
            count[firstNum] = 1
        }
    }

    
    for(let num in count){
        if(count[num] > 1){
            repeatedNumbers.push(+num);
        }
    }

    console.log(repeatedNumbers);
}

highestCandle([1,2,3,4,5,3,4,3]);


