// https://www.codewars.com/kata/59887207635904314100007b
function closest(arr){
    return arr.sort((a, b) => Math.abs(a) - Math.abs(b)).includes(arr[0] * -1) && arr[0] !== 0 ? null : arr[0]
}