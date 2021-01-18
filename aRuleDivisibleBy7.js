// https://www.codewars.com/kata/55e6f5e58f7817808e00002e
const seven = m => {
    let times = 0
    while ((''+m).length > 2) {
      times++
      m = Math.floor(m / 10) - (m % 10) * 2
    }
    return [m, times]
  }
  