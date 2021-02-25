// https://www.codewars.com/kata/57a049e253ba33ac5e000212
function factorial(n){
    let arr = []
    for (let i = 1;i <= n; i++) {
      arr.push(i)
    }
    return arr.reduce((a, b) => a * b, 1)
}