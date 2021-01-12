// 77
// https://www.codewars.com/kata/55caf1fd8063ddfa8e000018
const arithmeticSequenceElements = (a, r, n) => {
    let arr = []
    for (let i = 0; i < n; i++) arr.push(a + (r * i))
    return arr.join(', ')
}