// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.


function countFruitsOnHouse(
    s: number,
    t: number,
    a: number,
    b: number,
    apples: number[],
    oranges: number[],
){
    const applesInHouse = oranges
    .map(distance => b + distance)
    .filter(postion => postion >= s && postion <= t).length

    const orangesInHouse = oranges
    .map(distance => b + distance)
    .filter(postion => postion >= s && postion <= t).length

    console.log(applesInHouse);
    console.log(orangesInHouse)
}

const s = 7, t = 10;
const a = 4, b = 12;
const apples = [-2, 2, 1];
const oranges = [5, -6];

countFruitsOnHouse(s, t, a, b, apples, oranges);