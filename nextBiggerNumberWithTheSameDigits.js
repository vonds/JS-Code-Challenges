// https://www.codewars.com/kata/55983863da40caa2c900004e
const nextBigger = n => {
    const sortedDigits = n => ('' + n).split('').sort((a, b) => b - a)
    const max = +sortedDigits(n).join('')
    for (let i = n + 1; i <= max; i++) {
      if (max === +sortedDigits(i).join('')) return i
    }
    return -1
}