// https://www.codewars.com/kata/56853c44b295170b73000007
const isSquare = arr => {
    return arr.length === 0 ? undefined : arr.every(num => Math.sqrt(num).toString().length <= num.toString().length)
}