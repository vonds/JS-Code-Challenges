// https://www.codewars.com/kata/5324945e2ece5e1f32000370
const sumStrings = (a, b) => {
    let res = '' 
    let c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop()
      res = c % 10 + res
      c = c > 9
    }
    return res.replace(/^0+/, '')
}