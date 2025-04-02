// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.


function minMaxSum(arr: number[]): void{
    let total = 0;
    let min = arr[0];
    let max = arr[0];
    for(let num of arr){
        total += num;
        if(num > 0){
            if(num < min ){
                min = num
            }
            if(num > max){
                max = num
            }
        }
    }

    console.log(`${total - max} ${total - min}`);
}

// let myNumber = [1, 2, 3, 4, 5];
// let total = 0;

// for(let i = 0; i < myNumber.length; i++){
//     total += myNumber[i];
// }
// console.log(total) 

minMaxSum([1, 2, 3, 4, 5]);



