// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
function minMaxSum(arr) {
    var total = 0;
    var min = arr[0];
    var max = arr[0];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        total += num;
        if (num > 0) {
            if (num < min) {
                min = num;
            }
            if (num > max) {
                max = num;
            }
        }
    }
    console.log("".concat(total - max, " ").concat(total - min));
}
// let myNumber = [1, 2, 3, 4, 5];
// let total = 0;
// for(let i = 0; i < myNumber.length; i++){
//     total += myNumber[i];
// }
// console.log(total) 
minMaxSum([1, 2, 3, 4, 5]);
