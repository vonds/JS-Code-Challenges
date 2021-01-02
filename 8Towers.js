// https://www.codewars.com/kata/535bea76cdbf50281a00004c
function towerCombination(n){
    return n === 1 ? 1 : n * towerCombination(n - 1);
}