// https://www.codewars.com/kata/525f039017c7cd0e1a000a26
const palindromeChainLength = n => {  
    var x = parseInt( (""+n).split('').reverse().join('') )
    if(n != x) return 1 + palindromeChainLength (n + x)
    return 0
}