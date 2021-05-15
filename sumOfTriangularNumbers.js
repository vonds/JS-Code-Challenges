// https://www.codewars.com/kata/580878d5d27b84b64c000b51
const sumTriangularNumbers = n => {
    let sum = 0
    let total = 0
    for(let i = 0; i <= n; i++){
      sum += i * 1
      total += sum
    }
    return total
}