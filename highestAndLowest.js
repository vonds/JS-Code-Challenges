// https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers){
    const newArr = numbers.split(' ').map(n => +n)
    const lowest = Math.min(...newArr)
    const highest = Math.max(...newArr)
    return [highest, lowest].join(' ')
}