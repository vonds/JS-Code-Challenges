// https://www.codewars.com/kata/56606694ec01347ce800001b
function isTriangle(a,b,c){
    let max = Math.max(a, b, c)
    let sum = a + b + c
    return sum - max > max
}