// https://www.codewars.com/kata/55de6173a8fbe814ee000061
const unusedDigits = (...arr) => {
    const digits = arr.join()
  
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => !digits.includes(x)).join('')
  }