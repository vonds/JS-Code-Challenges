// https://www.codewars.com/kata/5913152be0b295cf99000001
const divisions = (n, divisor) => {
    let count = 0
    while(n > 1){
      count++
      n = n / divisor
    }
    return count - 1
}