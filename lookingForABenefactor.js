// https://www.codewars.com/kata/569b5cec755dd3534d00000f
function newAvg(arr, newavg){
    const x = newavg * (arr.length + 1) - arr.reduce((a,b) => a + b,0)
    if(x <= 0) throw 'ValueError'
    return Math.ceil(x)
}