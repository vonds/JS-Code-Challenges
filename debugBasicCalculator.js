// https://www.codewars.com/kata/56368f37d464c0a43c00007f
const calculate = (a, o, b) => { 
    if(o === "+") return a + b
    if(o === "-") return a - b
    if(o === "/") return b !== 0 ? a / b : null
    if(o === '*') return a * b
    return null
}