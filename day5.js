// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.
function countFruitsOnHouse(s, t, a, b, apples, oranges) {
    var applesInHouse = oranges
        .map(function (distance) { return b + distance; })
        .filter(function (postion) { return postion >= s && postion <= t; }).length;
    var orangesInHouse = oranges
        .map(function (distance) { return b + distance; })
        .filter(function (postion) { return postion >= s && postion <= t; }).length;
    console.log(applesInHouse);
    console.log(orangesInHouse);
}
var s = 7, t = 10;
var a = 4, b = 12;
var apples = [-2, 2, 1];
var oranges = [5, -6];
countFruitsOnHouse(s, t, a, b, apples, oranges);
